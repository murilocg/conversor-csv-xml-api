/* eslint-disable require-jsdoc */
const BuilderXml = require('./builderXml');

class Conversor {
  constructor(validations) {
    this.builder = new BuilderXml();
    this.validations = validations || [];
  }

  exec(data) {
    const errors = [];
    this.validations.forEach((rule) =>
      rule(data, (valid, e) => !valid && errors.push(e))
    );
    if (errors.length) this.addInvalid(errors);
    else this.addValid(data);
  }

  addInvalid(errors) {
    this.builder.addInvalid(errors);
  }

  addValid(data) {
    this.builder.addValid(data, this.fields);
  }

  export() {
    return this.builder.export();
  }
}

module.exports = Conversor;
