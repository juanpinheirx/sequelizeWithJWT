const { User } = require('../models');

const loginUser = async (email, password) => {
  const logged = await User.findOne({
    where: email, password,
  });
  return logged;
};

module.exports = {
  loginUser,
};