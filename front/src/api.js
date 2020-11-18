const LOGIN = {
    endpoint: '/seller/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: {
        senha: '',
        email: '',
    },
}

const SALES = {
    endpoint: '/sales',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': ''
    },
    body: {
        datainicial: '',
        datafinal: '',
    },
}

const SALES_CLIENTE = {
    endpoint: '/sales/clients/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': ''
    },
    body: {
        datainicial: '',
        datafinal: '',
    },
}


const SALES_PRODUTO = {
    endpoint: '/sales/product/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': ''
    },
    body: {
        datainicial: '',
        datafinal: '',
    },
}



module.exports = { LOGIN, SALES, SALES_CLIENTE, SALES_PRODUTO }