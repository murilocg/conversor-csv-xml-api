const RuleError = function ({ field, message }) {
  (this.field = field), (this.message = message);
};

module.exports = RuleError;
