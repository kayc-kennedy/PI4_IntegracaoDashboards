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

router.get('/unificado', cookie, (req, res) => {
    res.render('./dashboard/dashboard', {id_vendedor: req.cookies.id_vendedor})
})


// Busca na API
router.post('/vendas-fabricantes', DashboardController.vendas_fabricante)
router.post('/vendas-clientes', DashboardController.vendas_cliente)
router.post('/vendas-produtos', DashboardController.vendas_produto)
// Novos
router.post('/vendas-fabricantes-top', DashboardController.vendas_fabricante_top)
// router.post('/fabricantes-mix-clientes', DashboardController.fabricantes_mix_clientes)
router.post('/vendas-produtos-top', DashboardController.vendas_produtos_top)
router.post('/vendas-produtos-sum', DashboardController.vendas_produtos_sum)

module.exports = router