'use strict';
const db = require("../../database/database.js")
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');
const generateToken = require('./generateToken');

// Vendas por fabricante
exports.manufacturer_sales = async (req, res, next) => {
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
}

// Vendas por cliente
exports.clients_sales = async (req, res, next) => {

    const dataInicial = req.body.datainicial; 
    const dataFinal = req.body.datafinal;
    const idVend = req.params.id;

    const dados = {dataInicial, dataFinal, idVend}

    const vendas = await db.get_clients_sales(dados);

    if(vendas == false){
        return res.status(404).send({
            error: 'Error'
        });    
    }
    
    return res.status(201).send({
        vendas: vendas
    });
};


// Vendas por produto
exports.product_sales = async (req, res, next) => {

    const dataInicial = req.body.datainicial; 
    const dataFinal = req.body.datafinal;
    const idVend = req.params.id;

    const dados = {dataInicial, dataFinal, idVend}

    const vendas = await db.get_product_sales(dados);

    if(vendas == false){
        return res.status(404).send({
            error: 'Error'
        });    
    }
    
    return res.status(201).send({
        vendas: vendas
    });
};
