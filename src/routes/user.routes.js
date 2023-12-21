const router = require('express').Router();
const { userController } = require('../controllers');

router.post('/login', userController.loginControl);

module.exports = router;