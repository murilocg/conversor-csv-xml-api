/* eslint-disable require-jsdoc */
class FileHandler {
  getFileNameToXml(fileName) {
    if (!fileName) throw new Error('file name cannot be empty');
    return fileName.replace('csv', 'xml');
  }
}

module.exports = FileHandler;
