'use strict'
const express = require('express');
const router = express.Router();

const controller = require('../controllers/seller-controller.js')

router.get('/', controller.get);

router.post('/login', controller.post);


module.exports = router;
