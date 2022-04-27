const { BlogPost, User, Category } = require('../models');

const createPost = async (body) => {
  const { title, content, categoryIds } = body;

  const post = await BlogPost.create({ title, content, userId: categoryIds[0] });
  return post;
};

const getAllPost = async () => {
  const posts = await BlogPost.findAll();
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { status: 404, content: { message: 'Post does not exist' } };
  return { status: 200, content: post };
};
module.exports = {
  createPost,
  getAllPost,
  getPostById,
};