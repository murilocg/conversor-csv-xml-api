const csv = require('csv-parser');
const logger = require('../shared/logger');

const parser = (conversor, fileManager) =>
  transformCsv(fileManager.readFile(), conversor, writeXmlFile(fileManager));

const writeXmlFile = (fileManager) => (fileXml) => {
  fileManager.writeFile(fileXml, () =>
    logger.info(`File ${fileManager.fileName} parsed with success`)
  );
};

const transformCsv = (file, conversor, callback) =>
  file
    .pipe(csv())
    .on('data', (data) => conversor.exec(data))
    .on('end', () => callback(conversor.export()))
    .on('error', (e) =>
      logger.error(`Error transforming csv file`, { error: e })
    );

module.exports = parser;
