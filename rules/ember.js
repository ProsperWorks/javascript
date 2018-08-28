module.exports = {
  /**
   * We want to use the recommended ember settings but we are failing a lot of them
   * and they are non-trivial to clean up. Downgrade these errors to warnings or
   * disable them for the time being. As we fix them we can remove them from this
   * file with the ultimate goal of not needing any overrides at all.
   */
  rules: {
    'ember/avoid-leaking-state-in-ember-objects': 1,
    'ember/closure-actions': 0,
    'ember/jquery-ember-run': 1,
    'ember/no-on-calls-in-components': 1,
    'ember/no-side-effects': 1,
    'ember/use-brace-expansion': 1,
  },
};
