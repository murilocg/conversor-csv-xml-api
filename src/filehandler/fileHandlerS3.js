/* eslint-disable require-jsdoc */
const AWS = require('../shared/aws');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const FileHandler = require('./fileHandler');

class FileHandlerS3 extends FileHandler {
  constructor({ bucketKey, fileKey }) {
    super(fileKey);
    this.bucketKey = bucketKey;
  }

  readFile() {
    return s3
      .getObject({ Bucket: this.bucketKey, Key: this.fileName })
      .createReadStream();
  }

  writeFile(fileXml, callback) {
    const params = {
      Bucket: this.bucketKey,
      Key: this.fileName,
      Body: fileXml,
    };
    s3.putObject(params, callback);
  }
}

module.exports = FileHandlerS3;
