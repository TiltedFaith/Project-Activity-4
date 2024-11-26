// eslint.config.js
import { ESLint } from 'eslint';

const eslint = new ESLint();

export default [
  {
    files: ['**/*.js'],
    // Directly include the recommended config objects here
    parserOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript version
      sourceType: 'module',  // Ensure support for ES modules
    },
    plugins: ['eslint-plugin'],
    rules: {
      'no-console': 'warn', // Custom rules
      'no-unused-vars': 'warn',
    },
  },
];
