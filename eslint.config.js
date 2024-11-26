// eslint.config.js
import eslintRecommended from 'eslint/conf/eslint-recommended.js';

export default [
  eslintRecommended,  // Use the ESLint recommended config
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
