# i18n Translation Checking Guide

This guide explains how to analyze and maintain i18n translations in the Credo app, ensuring all translation keys are properly used and no obsolete keys remain in the codebase.

## Overview

The translation checking system helps you:
- Identify unused translation keys that can be safely removed
- Find missing translations that are used in code but not defined
- Understand dynamic translation patterns (template literals)
- Maintain clean and efficient translation files

## Quick Start

```bash
# Run full analysis
node scripts/i18n/analyze-i18n.cjs

# View summary only
node scripts/i18n/i18n-summary.cjs

# Clean up unused keys (interactive)
node scripts/i18n/cleanup-unused-i18n.cjs
```

## Configuration

### Safe Keys Configuration

The system supports a "safe keys" configuration file (`i18n-safe-keys.json`) that specifies translation keys that should never be marked as unused, even if they're not found in the source code. This is useful for:

- Keys used in external systems or APIs
- Keys for future features
- Keys used dynamically in ways the scanner can't detect
- Keys required by third-party integrations

**Example `i18n-safe-keys.json`:**
```json
{
  "description": "Translation keys that should never be marked as unused",
  "safeKeys": [
    "common.storeManagement",
    "common.salaryManagement",
    "common.customerManagement",
    "common.poManagement",
    "common.configuration",
    "common.staffManagement"
  ],
  "patterns": [
    "pcOnly.__check__",
    "pwa.__check__"
  ]
}
```

## Scripts

### 1. `analyze-i18n.cjs` - Main Analysis Tool

This script performs comprehensive analysis of your i18n translations:

**What it does:**
- Flattens nested JSON structure to single-level keys (e.g., `common.pages.blank`)
- Scans all TypeScript/TSX files for `t()` function usage
- Identifies dynamic patterns using template literals
- Compares defined vs. used keys
- Respects safe keys configuration

**Output files:**
- `en-flattened.json` - Flattened version of en.json
- `used-translation-keys.json` - All keys found in source code
- `i18n-analysis-results.json` - Complete analysis results

**Smart filtering:**
- Ignores false positives (URLs, imports, HTTP headers)
- Detects dynamic patterns like `t(\`employee.${status}\`)`
- Validates translation key patterns
- Preserves configured safe keys

### 2. `i18n-summary.cjs` - Summary Report

Provides a clean, readable summary of the analysis results:

```
📊 i18n Analysis Summary
==================================================
Total keys in en.json:        792
Keys used in source code:     740
Dynamic key patterns:         5
Safe keys (preserved):        6
Unused keys:                  29
==================================================
```

### 3. `cleanup-unused-i18n.cjs` - Interactive Cleanup

**Safety features:**
- Shows all keys to be removed before proceeding
- Excludes safe keys from deletion
- Requires confirmation before making changes
- Creates backups (`en.backup.json`, `vi.backup.json`)
- Updates both language files simultaneously

## Understanding the Results

### Unused Keys
Keys defined in translation files but never used in code. These can typically be safely removed.

Example:
```
auth.firstName
profile.featureFlags
```

### Safe Keys
Keys configured to be preserved regardless of usage. These are specified in `i18n-safe-keys.json` and will never be marked as unused.

Example:
```
common.storeManagement
common.customerManagement
```

### Dynamic Patterns
Template literals that resolve at runtime:

```typescript
// In code: t(`employee.${filters.status}`)
// Matches: employee.active, employee.inactive, etc.
```

Common patterns found:
- `employee.*` - Employee status variations
- `staff.*` - Staff role variations
- `validation.*Required` - Dynamic validation messages
- `validation.*TooShort` - Dynamic length validation

### False Positives Filtered
The script automatically filters out:
- URLs (`/api/users`, `@/components/...`)
- HTTP headers (`Content-Type`, `Authorization`)
- Single characters and special symbols
- File extensions and imports

## Best Practices

### 1. Regular Maintenance
Run the analysis monthly or before major releases to keep translations clean.

### 2. Before Removing Keys
- Verify the key isn't used in:
  - Dynamic server responses
  - Configuration files
  - Third-party integrations
  - Commented-out code (temporary)

### 3. After Cleanup
```bash
# Verify everything still works
yarn type-check
yarn dev

# If issues arise, restore from backups
cp src/locales/en.backup.json src/locales/en.json
cp src/locales/vi.backup.json src/locales/vi.json
```

### 4. Adding New Translations
When adding new features:
1. Add keys to both `en.json` and `vi.json`
2. Use consistent naming patterns
3. Run analysis to ensure keys are actually used

## Troubleshooting

### "Keys used but not defined"
These are often dynamic patterns. Check if they follow a pattern like:
```typescript
t(`validation.${fieldKey}Required`)
```

### Missing Keys in Analysis
Ensure the script checks all relevant directories. The default covers `src/` recursively.

### Performance
For large codebases, the analysis might take a few seconds. This is normal as it scans all TypeScript files.

## Integration with Development Workflow

### Pre-commit Hook (Optional)
```bash
# In package.json scripts
"check:i18n": "node i18n-summary.cjs"
```

### CI/CD Integration
Add to your CI pipeline to catch unused translations:
```yaml
- name: Check i18n translations
  run: |
    node analyze-i18n.cjs
    if [ $(jq '.unusedKeys | length' i18n-analysis-results.json) -gt 50 ]; then
      echo "Warning: More than 50 unused translation keys found"
      exit 1
    fi
```

## Advanced Usage

### Custom Patterns
To add custom extraction patterns, modify in `analyze-i18n.cjs`:
```javascript
const patterns = [
  /t\(['"`]([^'"`]+)['"`]\)/g,              // Standard t('key')
  /translate\(['"`]([^'"`]+)['"`]\)/g,      // Custom translate function
  // Add your patterns here
];
```

### Managing Safe Keys
To exclude specific keys from being marked as unused, update the `i18n-safe-keys.json` file:

```json
{
  "safeKeys": [
    // Add exact key matches here
    "common.loading",
    "errors.unknown"
  ],
  "patterns": [
    // Add patterns with wildcards here
    "feature.*",           // All keys starting with "feature."
    "*.temporaryKey"       // All keys ending with ".temporaryKey"
  ]
}
```

The safe keys configuration supports:
- **Exact matches**: Listed in the `safeKeys` array
- **Pattern matches**: Listed in the `patterns` array with wildcard support (`*`)

## Related Documentation
- [i18n Architecture Reference](.claude/i18n.md)
- [React i18next Documentation](https://react.i18next.com/)
