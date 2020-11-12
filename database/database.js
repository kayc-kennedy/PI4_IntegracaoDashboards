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
    
// Buscar Vendas por cliente
async function get_clients_sales(dados){
    let responseJson = [];
    let sql;
    const {dataInicial, dataFinal, idVend} = dados;

    if (idVend == undefined){
        sql = '/*AND ite.codvend =*/'
    }else{
        sql = 'AND ite.codvend = ' + idVend;
    }


    let conn = await conexao();
    const [rows] = await conn.execute(`
            SELECT
            ite.codparc CODPARC,
            par.nomeparc NOMEPARC,
            par.razaosocial RAZAOSOCIAL,
            SUM(ite.vlrtot) VLRTOTAL,
            SUM(ite.vlrtotcomdesc) VLRTOTALCOMDESC,
            SUM(ite.vlrdesctot) VLRTOTALDODESCONTO,
            COUNT(DISTINCT ite.codprod) MIXDEPRODUTO
        FROM
            tgfite ite
            INNER JOIN tgfpar par ON (ite.codparc = par.codparc)
        WHERE
            ite.dtneg BETWEEN '${dataInicial}' AND '${dataFinal}' ${sql}
        GROUP BY
            ite.codparc,
            par.nomeparc,
            par.razaosocial
        ORDER BY
            SUM(ite.vlrtotcomdesc) DESC`)

    for (let i = 0; i < rows.length; i++) {
        responseJson.push({
            "codparc": rows[i].CODPARC,
            "nomeparc": rows[i].NOMEPARC,
            "razaosocial": rows[i].RAZAOSOCIAL,
            "vlrtotal": rows[i].VLRTOTAL,
            "vlrtotcomdesc":rows[i].VLRTOTALCOMDESC,
            "vlrdesctot":rows[i].VLRTOTALDODESCONTO,
            "mixdeproduto":rows[i].MIXDEPRODUTO
        })            
    }
    return responseJson;
}

// Buscar Vendas por cliente
async function get_product_sales(dados){
    let responseJson = [];
    let sql;
    const {dataInicial, dataFinal, idVend} = dados;

    if (idVend == undefined){
        sql = ' /*AND ite.codvend =*/'
    }else{
        sql = ' AND ite.codvend = ' + idVend;
    }

    let conn = await conexao();
    const [rows] = await conn.execute(`
        SELECT
            ite.codprod CODPROD,
            pro.descrprod DESCRPROD,
            SUM(ite.vlrtot) VLRTOTAL,
            SUM(ite.vlrtotcomdesc) VLRTOTALCOMDESC,
            SUM(ite.vlrdesctot) VLRTOTALDODESCONTO,
            COUNT(DISTINCT ite.codparc) MIXDECLIENTE
        FROM
            tgfite ite
            INNER JOIN tgfpro pro ON (ite.codprod = pro.codprod)
        WHERE
            ite.dtneg BETWEEN '${dataInicial}' AND '${dataFinal}' ${sql}
        GROUP BY
            ite.codprod,
            pro.descrprod
        ORDER BY
            SUM(ite.vlrtotcomdesc) DESC
        `)

    for (let i = 0; i < rows.length; i++) {
        responseJson.push({
            "codprod": rows[i].CODPROD,
            "descrprod": rows[i].DESCRPROD,
            "vlrtot": rows[i].VLRTOTAL,
            "vlrtotcomdesc": rows[i].VLRTOTALCOMDESC,
            "vlrdesctot":rows[i].VLRTOTALDODESCONTO,
            "mixdecliente":rows[i].MIXDECLIENTE
        })            
    }
    return responseJson;
}
module.exports = {get_sellers, get_sellerLogin, manufacturer_sales, get_clients_sales, get_product_sales}



