const { Category } = require('../models');

const findAllCategories = async () => {
  const foundAll = await Category.findAll();
  return foundAll;
};

module.exports = {
  findAllCategories,
};