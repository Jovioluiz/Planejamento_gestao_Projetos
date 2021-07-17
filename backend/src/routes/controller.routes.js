//Rotas que utilizam autenticação de Token

const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

const userController = require('../controller/projectController');

router.get('/teste', userController.teste);

module.exports = router;
