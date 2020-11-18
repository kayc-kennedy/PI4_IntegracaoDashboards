const express = require('express')
const router = express.Router()
const cookie = require('../middleware/index')
const DashboardController = require('../controllers/DashboardController')

// Renderização de views
router.get('/', cookie, (req, res) => {
    res.render('./dashboard/index')
})

router.get('/vendas-clientes', cookie, (req, res) => {
    res.render('./dashboard/vendas-clientes', {id_vendedor: req.cookies.id_vendedor})
})

router.get('/vendas-produtos', cookie, (req, res) => {
    res.render('./dashboard/vendas-produtos', {id_vendedor: req.cookies.id_vendedor})
})

// Busca na API
router.post('/vendas-fabricantes', DashboardController.vendas_fabricante)
router.post('/vendas-clientes', DashboardController.vendas_cliente)
router.post('/vendas-produtos', DashboardController.vendas_produto)

module.exports = router