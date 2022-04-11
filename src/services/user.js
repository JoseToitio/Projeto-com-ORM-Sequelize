const { user } = require('../models');
const userValidate = require('../schemas/user');

const errorTratament = (status, message) => ({
  status,
  message,
});

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = userValidate.validate({ displayName, email, password, image });
  if (error) throw errorTratament(400, error.message);
  const findEmail = await user.findOne({ where: { email } });

  if (findEmail) throw errorTratament(409, 'User already registered');

  const User = await user.create({ displayName, email, password, image });

  return User;
};

module.exports = { createUser };