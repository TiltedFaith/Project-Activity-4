// eslint.config.js
import { ESLint } from 'eslint';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module',  // Ensure support for ES modules
      },
    },
    rules: {
      'no-console': 'warn', // Custom rules
      'no-unused-vars': 'warn',
    },
  },
];
