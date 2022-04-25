const { User } = require('../models');

const login = async (email) => {
  const user = await User.findOne({
    where: { email }, attributes: { exclude: ['password'] },
  });
  return user;
};

module.exports = {
  login,
};