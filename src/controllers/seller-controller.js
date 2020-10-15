'use strict';
const db = require("../../database/database.js")

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
