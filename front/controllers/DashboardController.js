const data = require('../data/index')

module.exports = {

    vendas_fabricante: async function (req, res) {
        let { jwt } = req.cookies
        const { datainicial, datafinal } = req.body
        const response = await data.api_vendas_fabricante({ datainicial, datafinal }, { jwt })
        return res.status(response.code).send({ error: response.error, data: response.data })
    },

    vendas_cliente: async function (req, res) {
        let { jwt } = req.cookies
        const { datainicial, datafinal, codigocliente } = req.body
        const response = await data.api_vendas_cliente({ datainicial, datafinal }, { jwt }, { codigocliente })
        return res.status(response.code).send({ error: response.error, data: response.data })
    },

    vendas_produto: async function (req, res) {
        let { jwt } = req.cookies
        const { datainicial, datafinal, codigoproduto } = req.body
        const response = await data.api_vendas_produto({ datainicial, datafinal }, { jwt }, { codigoproduto })
        return res.status(response.code).send({ error: response.error, data: response.data })
    },

}