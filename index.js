module.exports = {
  extends: [
    './rules/comparison',
    './rules/es6',
    './rules/function',
    './rules/module',
    './rules/quotes',
    './rules/syntax',
    './rules/white-space',
  ].map(require.resolve),
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
};
