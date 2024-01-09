const { Category } = require('../models');

const createCategory = async (name) => {
  const created = await Category.create({
    name,
  });
  return created;
};

const findAllCategories = async () => {
  const foundAll = await Category.findAll();
  return foundAll;
};

module.exports = {
  findAllCategories,
  createCategory,
};
