const validadeLogin = async (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (email === undefined) return res.status(400).json({ message: '"email" is required' });
  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });
  if (!regex.test(email)) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

module.exports = { validadeLogin,
validatePassword };