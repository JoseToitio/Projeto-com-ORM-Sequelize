const express = require('express');
const tokenValidate = require('../middlewares/tokenValidate');
const middlewares = require('../middlewares/postValidate');
const Post = require('../controllers/postController');

const router = express.Router();

router.post('/',
tokenValidate, 
middlewares.validateCategory,
middlewares.validateContent,
middlewares.validateTitle, 
Post.createPost);

module.exports = router;