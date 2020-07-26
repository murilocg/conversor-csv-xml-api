const compiler = require('../compiler');
const fileHandler = require('../filehandler');
const manager = require('./manager');
const logger = require('../shared/logger');

const parser = (req, res) => {
  try {
    const { source, rules } = req.body;
    logger.info(
      `Received a request to process the file from source ${source.type}`
    );
    manager(compiler(rules), fileHandler(source));
    res.send({ message: 'The file will be processed soon' });
  } catch (e) {
    console.log(e);
    logger.error('Error on parsing csv file to xml file', { error: e });
    res.status(500).send(e);
  }
};

module.exports = { parser };
