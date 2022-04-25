const UserService = require('../services/userServices');

const createUser = async (req, res, next) => {
  try {
    const token = await UserService.createUser(req.body);
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getAllUsers };