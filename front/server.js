const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

const login_routes = require('./routes/login.js')
const dashboard_routes = require('./routes/dashboard.js')

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// CSS e JS
app.use(express.static(__dirname + '/public'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'))
app.use('/css/chartist', express.static(__dirname + '/node_modules/chartist/dist/'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js/'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
app.use('/chart', express.static(__dirname + '/node_modules/chart.js/dist/'))
app.use('/chartist', express.static(__dirname + '/node_modules/chartist/dist/'))
app.use('/axios', express.static(__dirname + '/node_modules/axios/dist/'))
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'))

// Rotas
app.use('/', login_routes)
app.use('/dashboard', dashboard_routes)

app.listen(5000, () => {
    console.log(`Servidor ativo na porta 5000`)
})