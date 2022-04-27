const { BlogPost } = require('../models');

const createPost = async (body) => {
  const { title, content, categoryIds } = body;

  const post = await BlogPost.create({ title, content, userId: categoryIds[0] });
  return post;
};

const getAllPost = async () => {
  const posts = await BlogPost.findAll();
  return posts;
};
module.exports = {
  createPost,
  getAllPost,
};