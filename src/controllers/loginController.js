// const jwt = require('jsonwebtoken');
const loginService = require('../services/loginServices');
const tokeng = require('../token/tokenGenerator');

const login = async (req, res) => {  
  try {
    const { email, password } = req.body;
    const exist = await loginService.login(email, password);
    if (!exist) return res.status(400).json({ message: 'Invalid fields' });
    const token = tokeng({ email, password });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { login };