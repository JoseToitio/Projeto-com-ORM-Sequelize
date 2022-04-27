const PostServices = require('../services/postServices');
const { BlogPost, User, Category } = require('../models');

const createPost = async (req, res) => {
  try {
    const post = await PostServices.createPost(req.body);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return res.status(200).json(posts);    
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  createPost,
  getAllPost,
};