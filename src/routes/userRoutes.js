const express = require('express');
const User = require('../controllers/userController');
const middlewaresUser = require('../middlewares/User');

const router = express.Router();

router.post('/', middlewaresUser.validateEmailUser, middlewaresUser.validadeUser, User.createUser);

module.exports = router;