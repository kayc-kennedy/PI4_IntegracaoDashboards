'use strict'
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth');
const controller = require('../controllers/sales-controller');


router.get('/', middleware, controller.get_manufacturer_sales);
router.get('/clients/:id?', middleware, controller.get_clients_sales);
router.get('/product/:id?', middleware, controller.get_product_sales);

module.exports = router;
