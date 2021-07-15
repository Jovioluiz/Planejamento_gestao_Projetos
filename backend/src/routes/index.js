const express = require('express');

const usersRoutes = require('./users.routes');

const router = express.Router();

router.use('/user', usersRoutes);

module.exports = router;