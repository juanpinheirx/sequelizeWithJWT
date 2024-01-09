const router = require('express').Router();
const { postsController } = require('../controllers');
const { validToken } = require('../utils');

router.get('/post', validToken, postsController.getPostsControl);

module.exports = router;