'use strict'
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth')
const controller = require('../controllers/seller-controller.js')

router.get('/', middleware, controller.get);

router.post('/login', controller.post);


module.exports = router;
