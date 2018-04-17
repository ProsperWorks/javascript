/**
 * Style guide enforcement based on the PW standard and addtl ember-specific rules.
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
