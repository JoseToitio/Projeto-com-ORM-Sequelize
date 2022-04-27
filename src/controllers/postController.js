const PostServices = require('../services/postServices');

const createPost = async (req, res) => {
  try {
    const post = await PostServices.createPost(req.body);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
};

module.exports = {
  createPost,
};