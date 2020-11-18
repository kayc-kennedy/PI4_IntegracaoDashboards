'use strict'
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth');
const controller = require('../controllers/sales-controller');


router.post('/', middleware, controller.manufacturer_sales);
router.post('/clients/:id?', middleware, controller.clients_sales);
router.post('/product/:id?', middleware, controller.product_sales);

module.exports = router;
