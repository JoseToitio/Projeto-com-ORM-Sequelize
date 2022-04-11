const { tokenCreate } = require('../key/userKey');
const user = require('../services/user');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await user.createUser({ displayName, email, password, image });
    const token = tokenCreate(displayName, email);
    return res.status(201).json(token);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { createUser };