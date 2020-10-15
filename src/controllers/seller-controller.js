'use strict';
const db = require("../../database/database.js")

exports.get = async (req, res, next) => {
    const resposta = await db.get_sellers();
    if(!resposta){
        return res.status(200).send({
            error: 'Error'
        });    
    }
    return res.status(201).send({
        sellers: resposta.rows
    });
};
