/* eslint-disable new-cap */
const fileHandlerFs = require('./fileHandlerFs');
const fileHandlerS3 = require('./fileHandlerS3');
const logger = require('../shared/logger');

const readers = {
  fs: (source) => new fileHandlerFs(source),
  s3: (source) => new fileHandlerS3(source),
};

const fileReader = (source) => {
  logger.info(`creating file handler to type ${source.type}`);
  return readers[source.type](source);
};

module.exports = fileReader;
