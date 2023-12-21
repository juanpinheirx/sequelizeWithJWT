const { userService } = require('../services');
const jwt = require('../utils/token');

const loginControl = async (req, res) => {
  const { email, password } = req.body;
  const login = await userService.loginUser();
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (email !== login.email || password !== login.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { id } = login;
  const token = jwt.generateJwtToken({ id });

  return res.status(200).json({ token });
};

module.exports = {
  loginControl,
};
