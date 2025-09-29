#!/usr/bin/env node
const process = require('node:process');
const { execSync } = require('node:child_process');
const path = require('node:path');

// Colors for terminal output
const colors = {
  reset: '\u001B[0m',
  dim: '\u001B[2m',
  red: '\u001B[31m',
  green: '\u001B[32m',
  yellow: '\u001B[33m',
  blue: '\u001B[34m',
  cyan: '\u001B[36m',
  bold: '\u001B[1m',
};

console.log(`${colors.cyan}${colors.bold}📊 Unused Exports Analysis Summary${colors.reset}\n`);

// Run the main script and capture output
try {
  const output = execSync('node scripts/find-unused-exports.cjs', {
    encoding: 'utf8',
  });

  // Parse the output to get statistics
  const totalMatch = output.match(/Total exports analyzed: .*?(\d+)/);
  const unusedMatch = output.match(/Unused exports found: .*?(\d+)/);
  const usageMatch = output.match(/Usage rate: .*?([\d.]+)%/);

  const total = totalMatch ? Number.parseInt(totalMatch[1], 10) : 0;
  const unused = unusedMatch ? Number.parseInt(unusedMatch[1], 10) : 0;
  const usageRate = usageMatch ? Number.parseFloat(usageMatch[1], 10) : 0;

  // Extract file information
  const fileRegex = /^(.+?)\s+\((\d+) unused\)$/gm;
  const files = [];
  let match;

  while ((match = fileRegex.exec(output)) !== null) {
    files.push({
      path: match[1].replaceAll(/\u001B\[[\d;]*m/g, ''), // Remove color codes
      count: Number.parseInt(match[2], 10),
    });
  }

  // Sort files by unused count
  files.sort((a, b) => b.count - a.count);

  // Display summary
  console.log(`${colors.bold}Key Findings:${colors.reset}`);
  console.log(`• Total exports: ${colors.blue}${total}${colors.reset}`);
  console.log(`• Unused exports: ${colors.red}${unused}${colors.reset}`);
  console.log(
    `• Usage rate: ${usageRate < 50 ? colors.red : colors.green}${usageRate}%${colors.reset}`,
  );
  console.log();

  // Categorize files
  const categories = {
    'API Types & Schemas': files.filter((f) => f.path.includes('lib/api/')),
    Services: files.filter((f) => f.path.includes('services/')),
    Components: files.filter((f) => f.path.includes('components/')),
    Pages: files.filter((f) => f.path.includes('pages/')),
    Stores: files.filter((f) => f.path.includes('stores/')),
    Utils: files.filter((f) => f.path.includes('utils/')),
    Other: files.filter(
      (f) =>
        !f.path.includes('lib/api/') &&
        !f.path.includes('services/') &&
        !f.path.includes('components/') &&
        !f.path.includes('pages/') &&
        !f.path.includes('stores/') &&
        !f.path.includes('utils/'),
    ),
  };

  console.log(`${colors.bold}Analysis by Category:${colors.reset}`);
  for (const [category, categoryFiles] of Object.entries(categories)) {
    if (categoryFiles.length === 0) continue;

    const categoryTotal = categoryFiles.reduce((sum, f) => sum + f.count, 0);
    console.log(
      `\n${colors.yellow}${category}:${colors.reset} ${colors.red}${categoryTotal}${colors.reset} unused exports`,
    );

    // Show top 3 files in category
    for (const file of categoryFiles.slice(0, 3)) {
      console.log(`  • ${file.path}: ${colors.dim}${file.count} unused${colors.reset}`);
    }

    if (categoryFiles.length > 3) {
      console.log(`  ${colors.dim}... and ${categoryFiles.length - 3} more files${colors.reset}`);
    }
  }

  // Recommendations
  console.log(`\n${colors.bold}${colors.cyan}📋 Recommendations:${colors.reset}`);

  if (files.some((f) => f.path.includes('lib/api/'))) {
    console.log(`\n${colors.yellow}1. API Types & Schemas:${colors.reset}`);
    console.log(`   • Many unused Zod schemas and TypeScript types in lib/api/`);
    console.log(`   • Consider creating a separate types-only export file`);
    console.log(`   • Or use tree-shaking friendly barrel exports`);
  }

  if (usageRate < 50) {
    console.log(`\n${colors.yellow}2. Overall Usage:${colors.reset}`);
    console.log(`   • Usage rate is below 50% (${usageRate}%)`);
    console.log(`   • Review if exports are intended for external use`);
    console.log(`   • Consider making internal functions non-exported`);
  }

  console.log(`\n${colors.yellow}3. Quick Wins:${colors.reset}`);
  console.log(`   • Pages typically don't need exports (lazy loaded)`);
  console.log(`   • Internal helper functions can be unexported`);
  console.log(`   • Consolidate related exports into single modules`);

  console.log(`\n${colors.yellow}4. Cleanup Strategy:${colors.reset}`);
  console.log(`   • Start with files having most unused exports`);
  console.log(`   • Check if exports are used in tests before removing`);
  console.log(`   • Use TypeScript's "find all references" feature`);
  console.log(`   • Consider using ESLint's no-unused-vars rule`);

  // Safe to remove
  console.log(`\n${colors.green}${colors.bold}✅ Safe to Clean:${colors.reset}`);
  console.log(`• Page component exports (already lazy loaded)`);
  console.log(`• Unused validation schemas and types`);
  console.log(`• Internal helper functions`);

  // Be careful
  console.log(`\n${colors.red}${colors.bold}⚠️  Be Careful With:${colors.reset}`);
  console.log(`• API types that might be used by external consumers`);
  console.log(`• Store hooks that might be used dynamically`);
  console.log(`• Exports used in test files`);
} catch (error) {
  console.error(`${colors.red}Error running analysis:${colors.reset}`, error.message);
  process.exit(1);
}
