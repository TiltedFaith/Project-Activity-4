// eslint.config.js
export default [
    {
      files: ['**/*.js'],
      extends: ['eslint:recommended'],  // Use ESLint's built-in recommended rules
      rules: {
        'no-console': 'warn',  // Custom rules
        'no-unused-vars': 'warn',
      },
    },
  ];
  