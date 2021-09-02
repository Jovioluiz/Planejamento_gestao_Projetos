//Rotas que utilizam autenticação de Token

const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

const projectController = require('../controller/projectController');

router.get('/teste', projectController.teste);
router.post('/createResidencia', projectController.createResidencia);
router.post('/getResidencia', projectController.getResidencia);
router.post('/createAtendimento', projectController.createAtendimento);
router.post('/getAtendimento', projectController.getAtendimento);

module.exports = router;
