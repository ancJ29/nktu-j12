#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

// Configuration
const SRC_DIR = path.join(__dirname, '..', 'src');
const FILE_EXTENSIONS = new Set(['.ts', '.tsx']);
const IGNORE_PATTERNS = [
  'node_modules',
  '.test.',
  '.spec.',
  '.d.ts',
  'vite-env.d.ts',
  '__tests__',
  '__mocks__',
];

// Colors for terminal output
const colors = {
  reset: '\u001B[0m',
  dim: '\u001B[2m',
  red: '\u001B[31m',
  green: '\u001B[32m',
  yellow: '\u001B[33m',
  blue: '\u001B[34m',
  cyan: '\u001B[36m',
};

// Track all exports and imports
const allExports = new Map(); // Map<filePath, Set<exportName>>
const allImports = new Map(); // Map<exportName, Set<importingFile>>
const barrelExports = new Map(); // Map<filePath, Array<{type: 'direct'|'wildcard', source: string}>>

/**
 * Check if file should be ignored
 */
function shouldIgnoreFile(filePath) {
  return IGNORE_PATTERNS.some((pattern) => filePath.includes(pattern));
}

/**
 * Get all TypeScript/TSX files recursively
 */
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!shouldIgnoreFile(filePath)) {
        getAllFiles(filePath, fileList);
      }
    } else if (
      FILE_EXTENSIONS.has(path.extname(file)) &&
      !shouldIgnoreFile(filePath)
    ) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

/**
 * Extract exports from a file
 */
function extractExports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativeFilePath = path.relative(SRC_DIR, filePath);
  const fileExports = new Set();

  // Match named exports: export function, export const, export class, export interface, export type
  const namedExportRegex =
    /export\s+(?:async\s+)?(?:function|const|let|var|class|interface|type|enum)\s+([A-Za-z_$][\w$]*)/g;
  let match;
  while ((match = namedExportRegex.exec(content)) !== null) {
    fileExports.add(match[1]);
  }

  // Match export { ... } statements
  const exportBracesRegex = /export\s*{([^}]+)}/g;
  while ((match = exportBracesRegex.exec(content)) !== null) {
    const exportList = match[1];
    // Handle: export { name }, export { name as alias }
    const names = exportList.split(',').map((e) => {
      const parts = e.trim().split(/\s+as\s+/);
      return parts.at(-1).trim();
    });
    for (const name of names) {
      if (name) fileExports.add(name);
    }
  }

  // Track barrel exports
  const barrels = [];

  // Match export * from './module'
  const exportWildcardRegex =
    /export\s*\*\s*(?:as\s+[A-Za-z_$][\w$]*\s+)?from\s*['"]([^'"]+)['"]/g;
  while ((match = exportWildcardRegex.exec(content)) !== null) {
    barrels.push({type: 'wildcard', source: match[1]});
  }

  // Match export { ... } from './module'
  const exportFromRegex = /export\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/g;
  while ((match = exportFromRegex.exec(content)) !== null) {
    const names = match[1].split(',').map((e) => {
      const parts = e.trim().split(/\s+as\s+/);
      return parts.at(-1).trim();
    });
    for (const name of names) {
      if (name) fileExports.add(name);
    }

    barrels.push({type: 'direct', source: match[2], names});
  }

  if (fileExports.size > 0) {
    allExports.set(relativeFilePath, fileExports);
  }

  if (barrels.length > 0) {
    barrelExports.set(relativeFilePath, barrels);
  }
}

/**
 * Extract imports from a file
 */
function extractImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativeFilePath = path.relative(SRC_DIR, filePath);

  // Match import { ... } from './module'
  const importBracesRegex = /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = importBracesRegex.exec(content)) !== null) {
    const importPath = match[2];
    const importList = match[1];

    // Parse individual imports (handling 'as' aliases)
    const names = importList.split(',').map((e) => {
      const parts = e.trim().split(/\s+as\s+/);
      return parts[0].trim(); // Use original name, not alias
    });

    for (const name of names) {
      if (name) {
        if (!allImports.has(name)) {
          allImports.set(name, new Set());
        }

        allImports.get(name).add(relativeFilePath);
      }
    }
  }

  // Match dynamic imports: import('./module')
  const dynamicImportRegex = /import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
  while ((match = dynamicImportRegex.exec(content)) !== null) {
    // For dynamic imports, we can't easily determine what's being imported
    // So we'll mark the file as having dynamic imports
    if (!allImports.has('__dynamic__')) {
      allImports.set('__dynamic__', new Set());
    }

    allImports.get('__dynamic__').add(relativeFilePath);
  }

  // Match import * as name from './module'
  const importWildcardRegex =
    /import\s*\*\s*as\s+[A-Za-z_$][\w$]*\s+from\s*['"]([^'"]+)['"]/g;
  while ((match = importWildcardRegex.exec(content)) !== null) {
    // For wildcard imports, we can't determine individual usage
    if (!allImports.has('__wildcard__')) {
      allImports.set('__wildcard__', new Set());
    }

    allImports.get('__wildcard__').add(relativeFilePath);
  }
}

/**
 * Check if an export might be used through barrel exports
 */
function isUsedThroughBarrel(exportName, exportFile) {
  // Check if this export might be re-exported through a barrel file
  for (const [barrelFile, barrels] of barrelExports.entries()) {
    for (const barrel of barrels) {
      if (barrel.type === 'wildcard') {
        // For wildcard exports, we need to check if the source matches
        const resolvedSource = resolveImportPath(barrel.source, barrelFile);
        if (resolvedSource === exportFile) {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * Resolve import path to actual file path
 */
function resolveImportPath(importPath, fromFile) {
  if (importPath.startsWith('@/')) {
    // Handle alias imports (@/ -> src/)
    return importPath.replace('@/', '');
  }

  if (importPath.startsWith('.')) {
    // Handle relative imports
    const dir = path.dirname(fromFile);
    const resolved = path.join(dir, importPath);
    return path.normalize(resolved);
  }

  // For node_modules imports, return as-is
  return importPath;
}

/**
 * Find entry point files (main.tsx, vite config, etc.)
 */
function findEntryPoints() {
  const entryPoints = new Set();

  // Add known entry points
  const knownEntryPoints = ['main.tsx', 'vite.config.ts', 'vite.config.js'];

  for (const entry of knownEntryPoints) {
    const entryPath = path.join(SRC_DIR, '..', entry);
    if (fs.existsSync(entryPath)) {
      entryPoints.add(entry);
    }
  }

  // Add router files as they define the application structure
  const routerFiles = getAllFiles(SRC_DIR).filter((f) =>
    f.includes('/routers/'),
  );
  for (const f of routerFiles) entryPoints.add(path.relative(SRC_DIR, f));

  return entryPoints;
}

/**
 * Main analysis function
 */
function analyzeExports() {
  console.log(
    `${colors.cyan}🔍 Analyzing TypeScript/TSX files in: ${SRC_DIR}${colors.reset}\n`,
  );

  const files = getAllFiles(SRC_DIR);
  console.log(
    `Found ${colors.blue}${files.length}${colors.reset} TypeScript/TSX files\n`,
  );

  // Extract all exports
  console.log('📤 Extracting exports...');
  for (const file of files) extractExports(file);
  console.log(
    `Found ${colors.green}${allExports.size}${colors.reset} files with exports\n`,
  );

  // Extract all imports
  console.log('📥 Extracting imports...');
  for (const file of files) extractImports(file);

  // Also check entry point files
  const entryPoints = findEntryPoints();
  console.log(`\n🎯 Checking entry points: ${[...entryPoints].join(', ')}\n`);

  // Analyze unused exports
  const unusedByFile = new Map();
  let totalExports = 0;
  let totalUnused = 0;

  for (const [file, fileExports] of allExports.entries()) {
    const unused = [];

    for (const exportName of fileExports) {
      totalExports++;

      // Check if the export is imported anywhere
      const isImported = allImports.has(exportName);
      const isUsedInBarrel = isUsedThroughBarrel(exportName, file);
      const isEntryPoint = entryPoints.has(file);

      // Consider an export unused if:
      // 1. It's not imported anywhere
      // 2. It's not used through a barrel export
      // 3. It's not in an entry point file
      if (!isImported && !isUsedInBarrel && !isEntryPoint) {
        unused.push(exportName);
        totalUnused++;
      }
    }

    if (unused.length > 0) {
      unusedByFile.set(file, unused);
    }
  }

  // Generate report
  console.log(`${colors.yellow}📊 Export Usage Report${colors.reset}`);
  console.log('═'.repeat(80));
  console.log(
    `Total exports analyzed: ${colors.blue}${totalExports}${colors.reset}`,
  );
  console.log(
    `Unused exports found: ${colors.red}${totalUnused}${colors.reset}`,
  );
  console.log(
    `Usage rate: ${colors.green}${(((totalExports - totalUnused) / totalExports) * 100).toFixed(1)}%${colors.reset}`,
  );
  console.log('═'.repeat(80));

  if (unusedByFile.size === 0) {
    console.log(
      `\n${colors.green}✨ Excellent! No unused exports found.${colors.reset}`,
    );
  } else {
    console.log(`\n${colors.red}❌ Unused exports by file:${colors.reset}\n`);

    // Sort files by number of unused exports (descending)
    const sortedFiles = [...unusedByFile.entries()].sort(
      (a, b) => b[1].length - a[1].length,
    );

    for (const [file, unused] of sortedFiles) {
      console.log(
        `${colors.cyan}${file}${colors.reset} ${colors.dim}(${unused.length} unused)${colors.reset}`,
      );
      for (const name of unused) {
        console.log(`  ${colors.red}✗${colors.reset} ${name}`);
      }

      console.log();
    }

    // Summary of files with most unused exports
    console.log(
      `${colors.yellow}📈 Top files with unused exports:${colors.reset}`,
    );
    for (const [file, unused] of sortedFiles.slice(0, 5)) {
      console.log(
        `  ${file}: ${colors.red}${unused.length}${colors.reset} unused exports`,
      );
    }
  }

  // Warnings about limitations
  console.log(`\n${colors.yellow}⚠️  Limitations:${colors.reset}`);
  console.log(`${colors.dim}• Dynamic imports may not be fully tracked`);
  console.log(`• Wildcard imports (import * as ...) may hide usage`);
  console.log(
    `• Exports used in tests are considered unused if test files are ignored`,
  );
  console.log(
    `• Some exports might be used by external packages${colors.reset}`,
  );
}

// Run the analysis
analyzeExports();
