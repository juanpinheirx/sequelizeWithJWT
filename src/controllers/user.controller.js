const { userService } = require('../services');
const jwt = require('../utils/token');

const loginControl = async (req, res) => {
  const { email, password } = req.body;
  const login = await userService.loginUser();
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  if (email !== login.email || password !== login.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { id } = login;
  const token = jwt.generateJwtToken({ id });

  return res.status(200).json({ token });
};

const createControl = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const createdEmail = await userService.loginUser({ email });
  if (createdEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }
  await userService.createUser(displayName, email, password, image);
  const created = await userService.loginUser();
  const { id } = created;
  const token = jwt.generateJwtToken({ id });
  return res.status(201).json({ token });
};

const getAllControl = async (req, res) => {
  const findAll = await userService.getUsers();
  return res.status(200).json(findAll);
};

module.exports = {
  loginControl,
  createControl,
  getAllControl,
};
