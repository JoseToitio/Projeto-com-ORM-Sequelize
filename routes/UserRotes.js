const express = require('express');

const user = require('../src/controllers/User');

const routes = express.Router();

routes.post('/', user.createUser);

module.exports = routes;