module.exports = {
  root: true,
  env: { es6: true, node: true, jest: true, browser: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: ['./tsconfig.json'],
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: [
    'react',
    'react-hooks',
    'react-native',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  rules: {

    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 100,
      semi: true,
      bracketSpacing: true
    }],


    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',

    'unused-imports/no-unused-imports': 'warn',
    'import/order': ['warn', {
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
      'newlines-between': 'always',
      alphabetize: { order: 'asc', caseInsensitive: true },
    }],

    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',

    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': 'off',
  },
  ignorePatterns: [
    'node_modules/',
    'android/',
    'ios/',
    'build/',
    'dist/'
  ]
};