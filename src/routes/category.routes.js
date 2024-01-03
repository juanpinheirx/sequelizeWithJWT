const router = require('express').Router();
const { categoryController } = require('../controllers');
const { validToken } = require('../utils');

router.get('/categories', validToken, categoryController.findAllCategoriesControl);

module.exports = router;