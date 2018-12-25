module.exports = {
  extends: ['eslint:recommended','plugin:react/recommended'],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'off',
    strict: ['error', 'global'],
    curly: 'warn',
  },
};
