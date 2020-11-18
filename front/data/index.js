const axios = require('axios')
const { URL } = require('../src/url')
const { LOGIN, SALES, SALES_CLIENTE, SALES_PRODUTO } = require('../src/api')

module.exports = {
    
    api_login: async (data) => {
        const { baseURL } = URL
        const finalURL = baseURL.concat(LOGIN.endpoint)
        LOGIN.body = { data }
        try {
            const response = await axios.post(finalURL, LOGIN.body.data)
            return { error: false, data: response.data }
        } catch (error) {
            return { error: true, data: error.response.data, code: error.response.status }
        }
    },

    api_vendas_fabricante: async (data, token) => {
        const { baseURL } = URL
        const finalURL = baseURL.concat(SALES.endpoint)
        SALES.body = { data }
        SALES.headers.Authorization = `Bearer ${token.jwt}`
        const config = { headers: SALES.headers };
        try {
            const response = await axios.post(finalURL, SALES.body.data, config)
            return { error: false, data: response.data, code: response.status }
        } catch (error) {
            return { error: true, data: error.response.data, code: error.response.status }
        }
    },

    api_vendas_cliente: async (data, token, optional) => {
        const { baseURL } = URL
        let finalURL = baseURL.concat(SALES_CLIENTE.endpoint)
        finalURL = finalURL.concat(optional.codigocliente || "")
        SALES_CLIENTE.body = { data }
        SALES_CLIENTE.headers.Authorization = `Bearer ${token.jwt}`
        const config = { headers: SALES_CLIENTE.headers };
        try {
            const response = await axios.post(finalURL, SALES_CLIENTE.body.data, config)
            return { error: false, data: response.data, code: response.status }
        } catch (error) {
            return { error: true, data: error.response.data, code: error.response.status }
        }
    },

    api_vendas_produto: async (data, token, optional) => {
        const { baseURL } = URL
        let finalURL = baseURL.concat(SALES_PRODUTO.endpoint)
        finalURL = finalURL.concat(optional.codigoproduto || "")
        SALES_PRODUTO.body = { data }
        SALES_PRODUTO.headers.Authorization = `Bearer ${token.jwt}`
        const config = { headers: SALES_PRODUTO.headers };
        try {
            const response = await axios.post(finalURL, SALES_PRODUTO.body.data, config)
            return { error: false, data: response.data, code: response.status }
        } catch (error) {
            return { error: true, data: error.response.data, code: error.response.status }
        }
    }


}