const { categoryService } = require('../services');

const createCategoryControl = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const createdControl = await categoryService.createCategory(name);
  return res.status(201).json(createdControl);
};

const findAllCategoriesControl = async (_req, res) => {
  const foundAllControl = await categoryService.findAllCategories();
  return res.status(200).json(foundAllControl);
};

module.exports = {
  findAllCategoriesControl,
  createCategoryControl,
};
