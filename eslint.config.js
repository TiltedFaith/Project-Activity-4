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
      globals: {
        structuredClone: 'readonly', // Add structuredClone to global variables
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'warn',
    },
  },
];
