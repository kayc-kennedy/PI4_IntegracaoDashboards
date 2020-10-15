const mysql = require('mysql2/promise');

    async function conexao(){

        const connection = await mysql.createConnection({
            host: 'localhost', // O host do banco. Ex: localhost
            user: 'root', // Um usuário do banco. Ex: user 
            password: '123brochine', // A senha do usuário. Ex: user123
            database: 'pi4' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
        });
        return connection;
    }

    async function get_sellers() {  
        let responseJson = [];

        let conn = await conexao();

        const [rows ] = await conn.execute('select a.codvend, a.apelido from tgfven a ')

            for (let i = 0; i < rows.length; i++) {
                responseJson.push({
                    "codvendedor": rows[i].codvend,
                    'apelido': rows[i].apelido
                })    
            }

            if(responseJson == undefined){
                return false;
            
            }else{
                return responseJson;              
        }
    }
    
module.exports = {get_sellers}



