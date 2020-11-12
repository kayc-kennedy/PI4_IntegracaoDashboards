'use strict'
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth');
const controller = require('../controllers/sales-controller');


router.get('/', middleware, controller.get);

module.exports = router;
