const mysql = require('mysql');
const connection = require('./conn');

module.exports = {

    get_sellers: async id => {  
        let responseJson;

        const response = connection.query('select a.codvend, a.apelido from tgfven a where a.codvend', (err, rows)=>{
            console.log(rows);
        })
        
    }
}



