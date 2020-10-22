const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Verifico se o Token foi informado
    if(!authHeader){
        return res.status(401).send({error: "Nenhum Token informado"});
    }

    // Divido o Token em 2 strings e verifico se de fato isso aconteceu
    const parts = authHeader.split(' ');
    if(!parts.length == 2){
        return res.status(401).send({error: 'Token Invalido'});
    }

    const [scheme, token] = parts;

    // Verifico se a variavel scheme contem a palavra "Bearer"
    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: 'Token mal formatado'});
    }

    jwt.verify(token, authConfig.secret, (err, decoded) =>{
        if(err) return res.status(401).send({error: "Token Invalido"});

        console.log(decoded.params)

        // req.userId = decoded.params.id;
        // console.log(req.userId)
        next()
    });
    
}