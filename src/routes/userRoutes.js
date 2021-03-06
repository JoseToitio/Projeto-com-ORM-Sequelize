const express = require('express');
const User = require('../controllers/userController');
const middlewaresUser = require('../middlewares/User');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/', middlewaresUser.validateEmailUser, middlewaresUser.validadeUser, User.createUser);
router.get('/', tokenValidate, User.getAllUsers);
router.get('/:id', tokenValidate, middlewaresUser.validateId, User.getByIdUser);
module.exports = router;