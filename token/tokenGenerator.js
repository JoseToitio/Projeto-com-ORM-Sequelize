const jwt = require('jsonwebtoken');

require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenGenerator = (user) => {
  const token = jwt.sign({ data: user }, SECRET, jwtConfig);
  return token;
};

module.exports = tokenGenerator;