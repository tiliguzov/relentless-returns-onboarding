module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./apps/*/tsconfig.app.json', './packages/*/tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'react', 'react-refresh', '@tanstack/query'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/require-default-props': 'off',
    '@typescript-eslint/dot-notation': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
  },
  overrides: [
    {
      files: ['**/vite.config.ts', '**/*.config.ts', '**/*.config.js'],
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.base.json'],
      },
    },
  ],
};
