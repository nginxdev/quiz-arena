const expo = require('eslint-config-expo/flat');
const prettier = require('eslint-plugin-prettier/recommended');

module.exports = [
  {
    ignores: [
      '**/.expo/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/web-build/**',
      '**/.git/**',
    ],
  },
  ...expo,
  prettier,
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
