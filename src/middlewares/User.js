const userSchemas = require('../schemas/userSchemas');
const { User } = require('../models');

const validadeUser = async (req, res, next) => {
  const { email } = req.body;
  const { error } = userSchemas.validate(req.body);
  const user = await User.findOne({ where: { email } });
  if (error) throw error;
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

const validateEmailUser = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  next();
};

module.exports = { validadeUser, validateEmailUser };