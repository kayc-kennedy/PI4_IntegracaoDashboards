'use strict'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carregar as rotas
const index_route = require('./routes/index.js')
const salespeople_router = require('./routes/salespeople.js')
const auth = require('./controllers/auth-controller.js')
const sales_router = require('./routes/sales.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index_route);
app.use('/seller', salespeople_router);
app.use('/auth', auth);
app.use('/sales', sales_router);
module.exports = app;
