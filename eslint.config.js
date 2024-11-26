// eslint.config.js
const eslintRecommended = require('eslint/conf/eslint-recommended');

module.exports = {
  overrides: [
    {
      files: ['**/*.js'],
      extends: ['eslint:recommended'], // Use the recommended ESLint config
      rules: {
        'no-console': 'warn', // Custom rules
        'no-unused-vars': 'warn',
      },
    },
  ],
};
