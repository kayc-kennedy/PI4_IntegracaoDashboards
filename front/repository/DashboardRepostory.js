const data = require('../data/index')

module.exports = {
    vendas_fabricante_top: async (resource, option) => {
        const response = await data.api_vendas_fabricante(resource, option)
        const sliced = response.data.vendas.slice(0, option.top || 5)
        return { data: sliced, code: response.code }
    },

    fabricantes_mix_clientes: async (resource, option) => {
        const response = await data.api_vendas_fabricante(resource, option)
        const sliced = response.data.vendas.slice(0, option.top || 5)
        return { data: sliced, code: response.code }
    },

    vendas_produtos_top: async (resource, option, optional) => {
        const response = await data.api_vendas_produto(resource, option, optional)
        const sliced = response.data.vendas.slice(0, option.top || 5)
        return { data: sliced, code: response.code }
    },

    vendas_produtos_quantidade: async (resource, option, optional) => {
        const responseVendas = await data.api_vendas_produto(resource, option, optional)
        const responseFabricante = await data.api_vendas_fabricante(resource, option)
        let vendas = responseVendas.data.vendas
        let fabricante = responseFabricante.data.vendas
        let qtdVendas = vendas.length
        let qtdFabricantes = fabricante.length
        let qtdMixClientes = ''

        qtdMixClientes = fabricante.reduce((total, elemento) => {
            return total += parseInt(elemento.mixdecliente)
        }, 0)

        let objeto = { qtdVendas, qtdFabricantes, qtdMixClientes }
        console.log(objeto)

        // const sliced = response.data.vendas.slice(0, option.top || 5)
        return { data: objeto, code: 200}
    },
}