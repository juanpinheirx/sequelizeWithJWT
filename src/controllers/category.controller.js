const { categoryService } = require('../services');

const findAllCategoriesControl = async (_req, res) => {
  const foundAllControl = await categoryService.findAllCategories();
  return res.status(200).json(foundAllControl);
};

module.exports = {
  findAllCategoriesControl,
};
