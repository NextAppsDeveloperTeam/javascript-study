module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': 'webpack',
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53',
    },
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-inner-declarations': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': ['warn'],
    'prefer-template': ['error'],
    'jsx-quotes': ['error', 'prefer-single'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
