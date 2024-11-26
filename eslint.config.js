// eslint.config.js
import { defineConfig } from 'eslint';

// Define ESLint config
export default defineConfig({
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
});
