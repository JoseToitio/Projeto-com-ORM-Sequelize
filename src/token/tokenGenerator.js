const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
  algorithm: 'HS256',
};

const tokenGenerator = (user) => {
  const token = jwt.sign(user, SECRET, jwtConfig);
  return token;
};

module.exports = tokenGenerator;