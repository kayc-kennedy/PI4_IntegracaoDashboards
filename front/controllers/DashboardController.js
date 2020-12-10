const data = require('../data/index')
const DashboardRepository = require('../repository/DashboardRepostory')

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

    // Novas rotas - dashboard
    vendas_fabricante_top: async function (req, res) {
        let { jwt } = req.cookies
        // const { datainicial, datafinal, jwt, top } = req.body
        const { datainicial, datafinal, top } = req.body
        const response = await DashboardRepository.vendas_fabricante_top({ datainicial, datafinal }, { jwt, top })
        return res.status(response.code).send({ error: response.error, data: response.data })
    },

    fabricantes_mix_clientes: async function (req, res) {
        let { jwt } = req.cookies
        // const { datainicial, datafinal, jwt, top } = req.body
        const { datainicial, datafinal, top } = req.body
        const response = await DashboardRepository.fabricantes_mix_clientes({ datainicial, datafinal }, { jwt, top })
        return res.status(response.code).send({ error: response.error, data: response.data })
    },

    vendas_produtos_top: async function (req, res) {
        let { jwt } = req.cookies
        // const { datainicial, datafinal, jwt, top } = req.body
        const { datainicial, datafinal, top, codigoproduto } = req.body
        const response = await DashboardRepository.vendas_produtos_top({ datainicial, datafinal }, { jwt, top }, { codigoproduto })
        return res.status(response.code).send({ error: response.error, data: response.data })
    },

    vendas_produtos_sum: async function (req, res) {
        let { jwt } = req.cookies
        // const { datainicial, datafinal, jwt, top } = req.body
        const { datainicial, datafinal, top, codigoproduto } = req.body
        const response = await DashboardRepository.vendas_produtos_quantidade({ datainicial, datafinal }, { jwt, top }, { codigoproduto })
        return res.status(response.code).send({ error: response.error, data: response.data })
    },
}