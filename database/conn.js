const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: '123brochine', // A senha do usuário. Ex: user123
    database: 'pi4' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});


module.exports = connection