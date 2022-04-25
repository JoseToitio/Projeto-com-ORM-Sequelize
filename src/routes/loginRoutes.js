const express = require('express');
const Login = require('../controllers/loginController');
const middlewaresLogin = require('../middlewares/login');

const router = express.Router();

router.post('/', 
  middlewaresLogin.validadeLogin,
  middlewaresLogin.validatePassword,
  Login.login);

module.exports = router;