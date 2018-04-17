/**
 * Style guide enforcement inherits the PW standard from index.js and adds
 * additional ember-specific rules.
 *
 * How to use:
 * In your .eslintrc.js extend @prosperworks/eslint-config/ember
 */
module.exports = {
  plugins: [
    'ember',
  ],
  extends: [
    './index',
    './rules/ember',
  ].map(require.resolve),
  env: {
    browser: true,
  },
};
