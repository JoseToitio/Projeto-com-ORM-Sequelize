const { User } = require('../models');
const tokenGenerator = require('../token/tokenGenerator');

const createUser = async (user) => {
  const result = await User.create(user);
  const token = tokenGenerator({ id: result.id });
  return token;
};

module.exports = {
  createUser,
};