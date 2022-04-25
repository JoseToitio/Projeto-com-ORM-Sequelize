const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const tokenValidate = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const validate = jwt.verify(authorization, SECRET);
    req.user = validate;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidate;