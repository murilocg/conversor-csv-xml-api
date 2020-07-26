const RuleError = require('./ruleError');
const operators = require('./operators');
const logger = require('../shared/logger');
const Conversor = require('../conversor');

const createValidation = ({ field, value, operator }) => {
  const rule = operators[operator];
  const error = new RuleError({ field, message: rule.message(field, value) });
  return (data, callback) =>
    rule.exec(data, field, value) ? callback(true) : callback(false, error);
};

const compiler = (rules) => {
  logger.info('compiling rules');
  return new Conversor(rules.map(createValidation));
};

module.exports = compiler;
