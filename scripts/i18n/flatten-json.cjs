#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { flattenObject } = require('./helpers.cjs');

// Main function to flatten and merge translations
function flattenAndMergeTranslations() {
  console.log('🔍 Flattening and merging i18n translations with EN as base...\n');

  // Load and flatten English (base) translations
  const enPath = path.join(__dirname, '../../src/locales/en.json');
  const enTranslations = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const enFlattened = flattenObject(enTranslations);

  console.log(`📄 Base language EN: ${Object.keys(enFlattened).length} keys`);

  // Load and flatten Vietnamese translations
  const viPath = path.join(__dirname, '../../src/locales/vi.json');
  const viTranslations = JSON.parse(fs.readFileSync(viPath, 'utf8'));
  const viFlattened = flattenObject(viTranslations);

  console.log(`📄 Target language VI: ${Object.keys(viFlattened).length} keys`);

  // Sync Vietnamese with English base
  const viSynced = {};
  let addedKeys = 0;
  let removedKeys = 0;

  // Add all English keys to Vietnamese (with TODO if missing)
  for (const key in enFlattened) {
    if (viFlattened[key] !== undefined) {
      viSynced[key] = viFlattened[key];
    } else {
      viSynced[key] = 'TODO: translate me!!!';
      addedKeys++;
    }
  }

  // Count removed keys (keys in VI but not in EN)
  for (const key in viFlattened) {
    if (!(key in enFlattened)) {
      removedKeys++;
    }
  }

  console.log(`\n🔄 Synchronization results:`);
  console.log(`   ✓ Added ${addedKeys} missing keys to VI with "TODO: translate me!!!"`);
  console.log(`   ✓ Removed ${removedKeys} keys from VI that don't exist in EN`);
  console.log(`   ✓ VI now has ${Object.keys(viSynced).length} keys (matching EN)`);

  // Create merged object with alternating language order
  const mergedTranslations = {};
  const sortedKeys = Object.keys(enFlattened).sort();

  // Add keys in alternating order: en, vi, en, vi...
  for (const key of sortedKeys) {
    mergedTranslations[`en:${key}`] = enFlattened[key];
    mergedTranslations[`vi:${key}`] = viSynced[key];
  }

  // Ensure flattened directory exists
  const flattenedDir = path.join(__dirname, 'flattened');
  if (!fs.existsSync(flattenedDir)) {
    fs.mkdirSync(flattenedDir, { recursive: true });
  }

  // Save merged flattened version
  const mergedPath = path.join(flattenedDir, 'merged-flattened.json');
  fs.writeFileSync(mergedPath, JSON.stringify(mergedTranslations, null, 2));
  console.log(`\n✅ Merged translations saved to: ${mergedPath}`);
  console.log(
    `   Total keys: ${Object.keys(mergedTranslations).length} (${sortedKeys.length} keys × 2 languages)`,
  );

  // Generate CSV file
  const csvPath = path.join(flattenedDir, 'merged-flattened.csv');
  let csvContent = 'KEY,EN,VI\n';

  // Escape CSV values (handle commas and quotes)
  const escapeCSV = (value) => {
    if (value === null || value === undefined) return '';
    const stringValue = String(value);
    // If value contains comma, newline, or quotes, wrap in quotes and escape internal quotes
    if (stringValue.includes(',') || stringValue.includes('\n') || stringValue.includes('"')) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
  };

  // Add data rows
  for (const key of sortedKeys) {
    const enValue = escapeCSV(enFlattened[key]);
    const viValue = escapeCSV(viSynced[key]);
    csvContent += `${key},${enValue},${viValue}\n`;
  }

  fs.writeFileSync(csvPath, csvContent);
  console.log(`📊 CSV file saved to: ${csvPath}`);
  console.log(`   Total rows: ${sortedKeys.length} translation keys`);

  // Remove old individual flattened files if they exist
  const languages = ['en', 'vi'];
  for (const lang of languages) {
    const oldPath = path.join(flattenedDir, `${lang}-flattened.json`);
    if (fs.existsSync(oldPath)) {
      fs.unlinkSync(oldPath);
      console.log(`   ✓ Removed old file: ${oldPath}`);
    }
  }

  console.log('\n✅ Flatten and merge complete with EN as base!');
}

// Run the flatten and merge
flattenAndMergeTranslations();
