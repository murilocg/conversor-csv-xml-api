const fs = require('fs');

const pipe = (...functions) => (initialValue) =>
  functions.reduce((res, func) => func(res), initialValue);

const obterStream = ({ Bucket, Key }) => {
  const path = `${__dirname}/${Bucket}/${Key}`;
  return fs.createReadStream(path);
};

module.exports = { pipe, obterStream };
