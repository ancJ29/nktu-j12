#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the analysis results
const resultsPath = path.join(__dirname, 'i18n-analysis-results.json');
const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));

console.log('📊 i18n Analysis Summary\n');
console.log('='.repeat(50));
console.log(`Total keys in en.json:        ${results.summary.totalKeysInEnJson}`);
console.log(`Keys used in source code:     ${results.summary.staticKeysUsedInSource}`);
console.log(`Dynamic key patterns:         ${results.summary.dynamicKeyPatterns}`);
console.log(`Safe keys (preserved):        ${results.summary.safeKeysCount || 0}`);
console.log(`Unused keys:                  ${results.summary.unusedKeysCount}`);
console.log('='.repeat(50));

if (results.unusedKeys.length > 0) {
  console.log('\n⚠️  Unused keys in en.json (can be safely removed):\n');
  results.unusedKeys.forEach(key => {
    console.log(`   ${key}`);
  });
}

if (results.dynamicPatterns && results.dynamicPatterns.length > 0) {
  console.log('\n🔄 Dynamic patterns (template literals with variables):\n');
  results.dynamicPatterns.forEach(pattern => {
    console.log(`   ${pattern}`);
  });
  console.log('\n   Note: These are resolved at runtime with actual values');
}

if (results.safeKeys && results.safeKeys.length > 0) {
  console.log('\n🛡️  Safe keys (preserved from deletion):\n');
  results.safeKeys.forEach(key => {
    console.log(`   ${key}`);
  });
  console.log('\n   Note: These keys are configured to never be removed');
}

console.log('\n✅ Summary: Found ' + results.unusedKeys.length + ' unused keys that can be removed from en.json');
console.log('   Run `node analyze-i18n.cjs` for detailed analysis');