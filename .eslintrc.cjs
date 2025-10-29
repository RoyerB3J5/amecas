module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {},
  overrides: [
    {
      files: ['*.astro'],
      // `eslint-plugin-astro` provides a processor for .astro files
      processor: 'astro/astro'
    },
    {
      files: ['*.ts', '*.mts', '*.cts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended']
    }
  ]
};
