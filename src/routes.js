const { Router } = require('express');
const { store } = require('./controllers/RegisterController');

const route = Router();

route.get('/', store);

module.exports = route;