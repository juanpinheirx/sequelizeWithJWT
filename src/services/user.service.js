const { User } = require('../models');

const loginUser = async (email, password) => {
  const logged = await User.findOne({
    where: email,
    password,
  });
  return logged;
};

const createUser = async (displayName, email, password, image) => {
  const create = await User.create({ displayName, email, password, image });
  return create;
};

const getUsers = async () => {
  const findAll = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'], 
  });
  return findAll;
};

module.exports = {
  loginUser,
  createUser,
  getUsers,
};
