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

    // Buscar Vendas por Fabricante
    async function manufacturer_sales(dados){
        let responseJson = [];

        const {dataInicial, dataFinal} = dados;

        let conn = await conexao();
        const [rows] = await conn.execute(`
            select pro.fabricante FABRICANTE,
                SUM(ite.vlrtot) VLRTOTAL,
                SUM(ite.vlrtotcomdesc) VLRTOTALCOMDESC,
                SUM(ite.vlrdesctot) VLRTOTALDODESCONTO,
                COUNT(DISTINCT ite.codprod) MIXDEPRODUTO,
                COUNT(DISTINCT ite.codparc) MIXDECLIENTE
            FROM
                tgfite ite
                INNER JOIN tgfpro pro ON (ite.codprod = pro.codprod)
            WHERE
                ite.dtneg BETWEEN '${dataInicial}' AND '${dataFinal}'
                -- AND ite.codvend = 3
            GROUP BY
                pro.fabricante
            ORDER BY
                SUM(ite.vlrtotcomdesc) DESC`)

        for (let i = 0; i < rows.length; i++) {
            responseJson.push({
                "fabricante": rows[i].FABRICANTE,
                "vlrtotal": rows[i].VLRTOTAL,
                "vlrtotaldodesconto": rows[i].VLRTOTALCOMDESC,
                "vlrtotaldodesconto": rows[i].VLRTOTALDODESCONTO,
                "mixdeproduto":rows[i].MIXDEPRODUTO,
                "mixdecliente":rows[i].MIXDECLIENTE
            })            
        }
        return responseJson;
    }


module.exports = {get_sellers, get_sellerLogin, manufacturer_sales}



