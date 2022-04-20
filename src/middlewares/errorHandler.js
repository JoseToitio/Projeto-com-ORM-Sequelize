const Joi = require('joi');
require('express-async-errors');

const errorHandler = (err, _req, res, _next) => {
  if (Joi.isError(err)) return res.status(400).json({ message: err.message });
  console.log(err);
  res.status(400).json({ message: err.message });
};

module.exports = errorHandler;