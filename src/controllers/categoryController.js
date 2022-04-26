const { Category } = require('../models');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({ name });
    return res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCategory,
};