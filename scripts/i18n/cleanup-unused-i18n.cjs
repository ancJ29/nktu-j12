#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to remove keys from nested object
function removeKeys(obj, keysToRemove) {
  const result = JSON.parse(JSON.stringify(obj)); // Deep clone

  keysToRemove.forEach(keyPath => {
    const parts = keyPath.split('.');
    let current = result;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) return;
      current = current[parts[i]];
    }

    delete current[parts[parts.length - 1]];
  });

  return result;
}

// Load analysis results
const resultsPath = path.join(__dirname, 'i18n-analysis-results.json');
const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));

if (results.unusedKeys.length === 0) {
  console.log('✅ No unused keys to remove!');
  process.exit(0);
}

console.log(`🧹 Found ${results.unusedKeys.length} unused keys to remove`);

if (results.safeKeys && results.safeKeys.length > 0) {
  console.log(`🛡️  ${results.safeKeys.length} safe keys will be preserved`);
}

console.log('\nUnused keys to remove:');
results.unusedKeys.forEach(key => console.log(`  - ${key}`));

// Ask for confirmation
console.log('\n⚠️  This will modify en.json and vi.json files!');
console.log('Press Ctrl+C to cancel, or any other key to continue...');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.once('data', () => {
  process.stdin.setRawMode(false);
  process.stdin.pause();

  // Process both language files
  ['en', 'vi'].forEach(lang => {
    const filePath = path.join(__dirname, `../../src/locales/${lang}.json`);
    const translations = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Create backup
    const backupPath = path.join(__dirname, `../../src/locales/${lang}.backup.json`);
    fs.writeFileSync(backupPath, JSON.stringify(translations, null, 2));
    console.log(`\n📁 Created backup: ${backupPath}`);

    // Remove unused keys
    const cleaned = removeKeys(translations, results.unusedKeys);

    // Save cleaned version
    fs.writeFileSync(filePath, JSON.stringify(cleaned, null, 2));
    console.log(`✅ Updated ${lang}.json - removed ${results.unusedKeys.length} keys`);
  });

  console.log('\n✨ Cleanup complete! Run type-check to verify everything still works.');
  console.log('   Backups created as en.backup.json and vi.backup.json');
});
