const router = require('express').Router();
const { userController } = require('../controllers');
const { validSignUp } = require('../utils');

router.post('/login', userController.loginControl);
router.post('/user', validSignUp, userController.createControl);

module.exports = router;