'use strict'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carregar as rotas
const index_route = require('./routes/index.js')
const seller_router = require('./routes/seller.js')
const auth = require('./controllers/auth-controller.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index_route);
app.use('/seller', seller_router);
app.use('/auth', auth)

module.exports = app;
