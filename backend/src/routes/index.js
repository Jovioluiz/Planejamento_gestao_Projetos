const express = require('express');

const usersRoutes = require('./users.routes');
const controllerRoutes = require('./controller.routes');

const router = express.Router();

router.use('/user', usersRoutes);
router.use('/controller', controllerRoutes);

module.exports = router;