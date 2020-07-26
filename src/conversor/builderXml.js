/* eslint-disable require-jsdoc */
const builder = require('xmlbuilder');

class BuilderXml {
  constructor() {
    const root = builder.create('root');
    this.root = root;
    this.valids = root.ele('valids');
    this.invalids = root.ele('invalids');
    this.count = { valids: 0, invalids: 0 };
    this.line = 0;
  }

  addInvalid(errors) {
    this.renderItem('invalids', errors, (root, e) => {
      const erroTag = root.ele('error');
      erroTag.ele('field', e.field);
      erroTag.ele('message', e.message);
    });
  }

  addValid(d) {
    this.renderItem('valids', Object.keys(d), (root, e) => root.ele(e, d[e]));
  }

  renderItem(tag, data, render) {
    this.linha++;
    this.count[tag]++;
    this[tag].att('count', this.count[tag]);
    const item = this[tag].ele('item').att('line', this.line);
    data.forEach((d) => render(item, d));
  }

  export() {
    const xml = this.root.end({ pretty: true });
    return Buffer.from(xml, 'utf-8');
  }
}

module.exports = BuilderXml;
