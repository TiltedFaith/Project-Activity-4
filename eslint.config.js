// eslint.config.js
import eslintRecommended from 'eslint/conf/eslint-recommended.js';

export default [
  eslintRecommended,  // Use the ESLint recommended config
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'warn',  // Custom rules
      'no-unused-vars': 'warn',
    },
  },
];
