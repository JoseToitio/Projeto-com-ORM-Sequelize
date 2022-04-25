const { User } = require('../models');
const tokenGenerator = require('../token/tokenGenerator');

const createUser = async (user) => {
  const result = await User.create(user);
  const token = tokenGenerator({ id: result.id });
  return token;
};

const getAllUsers = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return result;
};

const getByIdUser = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user;
};
module.exports = {
  createUser,
  getAllUsers,
  getByIdUser,
};