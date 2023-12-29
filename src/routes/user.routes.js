const router = require('express').Router();
const { userController } = require('../controllers');
const { validSignUp, validToken } = require('../utils');

router.post('/login', userController.loginControl);
router.post('/user', validSignUp, userController.createControl);
router.get('/user', validToken, userController.getAllControl);
router.get('/user/:id', validToken, userController.getById);

module.exports = router;