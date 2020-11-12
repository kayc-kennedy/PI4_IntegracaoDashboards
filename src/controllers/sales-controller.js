'use strict';
const db = require("../../database/database.js")
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');
const generateToken = require('./generateToken');

// Vendas por fabricante
exports.get = async (req, res, next) => {
    // const dados = req.body;
    const dataInicial = req.body.datainicial; 
    const dataFinal = req.body.datafinal;

    const dados = {dataInicial, dataFinal}

    const vendas = await db.manufacturer_sales(dados);

    if(vendas == false){
        return res.status(404).send({
            error: 'Error'
        });    
    }
    
    return res.status(201).send({
        vendas: vendas
    });
};
