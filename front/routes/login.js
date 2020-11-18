const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/LoginController')

// Verificar se o usuário está logado
router.get('/login', (req, res) => {
    let { jwt } = req.cookies
    if (jwt) {
        res.redirect('/dashboard');
    } else {
        res.render('./login/index')
    }
})

router.get('/', (req, res) => {
    let { jwt } = req.cookies
    if (jwt) {
        res.redirect('/dashboard');
    } else {
        res.render('./login/index')
    }
})

router.post('/login', LoginController.login);

router.get('/logout', (req, res) => {
    res.cookie('jwt', '')
    res.cookie('id_vendedor', '')
    res.redirect('/');
})

module.exports = router