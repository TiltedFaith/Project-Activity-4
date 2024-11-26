// eslint.config.js
const eslintRecommended = require('eslint/conf/eslint-recommended.js');

module.exports = [
  eslintRecommended,  // Use the ESLint recommended config
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
