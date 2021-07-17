const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');

router.get('/:userId', userController.getUser);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);

module.exports = router;
