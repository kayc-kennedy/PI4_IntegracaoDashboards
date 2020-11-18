const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = function gererateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: "24h"
    })
}