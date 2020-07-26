/* eslint-disable require-jsdoc */

const fs = require('fs');
const FileHandler = require('./fileHandler');

class FileHandlerFs extends FileHandler {
  constructor({ path, fileName }) {
    super();
    this.fileName = fileName;
    this.path = path;
  }

  readFile() {
    return fs.createReadStream(`${this.path}/${this.fileName}`);
  }

  writeFile(fileXml, callback) {
    const fileNameXml = this.getFileNameToXml(this.fileName);

    const write = () =>
      fs.writeFile(`${this.path}/${fileNameXml}`, fileXml, callback);

    fs.exists(`${this.path}`, (exists) => {
      if (exists) write();
      else fs.mkdir(this.path, write);
    });
  }
}

module.exports = FileHandlerFs;
