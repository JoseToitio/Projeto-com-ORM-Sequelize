const express = require('express');
const tokenValidate = require('../middlewares/tokenValidate');
const Category = require('../controllers/categoryController');
const middlewares = require('../middlewares/category');

const router = express.Router();

router.post('/', tokenValidate, middlewares.validateCategory, Category.createCategory);
router.get('/', tokenValidate, Category.getAllCategory);

module.exports = router;