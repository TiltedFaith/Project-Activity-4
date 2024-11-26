// eslint.config.js
import { ESLint } from 'eslint';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest', // Ensure support for latest ECMAScript features
        sourceType: 'module',  // Ensure support for ES modules
      },
    },
    rules: {
      'no-console': 'warn', // No need for structuredClone here
      'no-unused-vars': 'warn', // Custom rule
    },
  },
];
