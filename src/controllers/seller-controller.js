'use strict';
const db = require("../../database/database.js")

// Buscar todos os vendedores
exports.get = async (req, res, next) => {
    const resposta = await db.get_sellers();

    if(resposta == false){
        return res.status(404).send({
            error: 'Error'
        });    
    }
    return res.status(201).send({
        sellers: resposta
    });
};

// Login de Vendedores
exports.post = async (req, res, next) => {

    if(req.body){
        const usuario = {'email':req.body.email, 'senha':req.body.senha}
        const resposta = await db.get_sellerLogin(usuario);

        if(resposta == ''){
            return res.status(404).send({
                error: 'Usuario não encontrado'
            });    
        }else{
            return res.status(201).send({
                sellers: true
            });
        }
    }else{
        return res.status(404).send({
            error: 'Usuario não encontrado'
        })
    }
}

