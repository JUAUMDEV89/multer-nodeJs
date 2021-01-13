const { Router } = require('express');
const { store, login } = require('./controllers/RegisterController');

const route = Router();

route.get('/', store);
route.get('/login', login);

module.exports = route;