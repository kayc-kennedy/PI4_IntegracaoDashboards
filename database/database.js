const mysql = require('mysql2/promise');

    // Auntenticação com o Banco de Dados
    async function conexao(){

        const connection = await mysql.createConnection({
            host: 'localhost', // O host do banco. Ex: localhost
            user: 'root', // Um usuário do banco. Ex: user 
            password: '123brochine', // A senha do usuário. Ex: user123
            database: 'pi4' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
        });
        return connection;
    }

    // Buscar todos os vendedores
    async function get_sellers() {  
        let responseJson = [];

        let conn = await conexao();
      
        const [rows] = await conn.execute('select a.codvend, a.apelido from tgfven a')

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

    // Login de usuarios 
    async function get_sellerLogin(usuario){
        let responseJson = [];

        let conn = await conexao();
        const [rows] = await conn.execute(`select a.codvend, a.email, a.senha from tgfven a where a.email = '${usuario.email}' and a.senha = '${usuario.senha}'`)
        
        for (let i = 0; i < rows.length; i++) {
            responseJson.push({
                "email": rows[i].email,
                "codvend": rows[i].codvend
            })
        }
        return responseJson;
    }

module.exports = {get_sellers, get_sellerLogin}



