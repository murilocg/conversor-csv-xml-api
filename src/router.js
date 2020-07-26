const controller = require('./controller');
const { Router } = require('express');

const route = new Router();
route.post('/converter', controller.parser);

module.exports = route;
