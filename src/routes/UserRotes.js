const express = require('express');

const user = require('../controllers/User');

const routes = express.Router();

routes.post('/', user.createUser);

module.exports = routes;