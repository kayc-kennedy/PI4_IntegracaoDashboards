const data = require('../data/index')

const { report } = require('../routes/login')

module.exports = {
    login: async function (req, res) {
        const { email, senha } = req.body
        const response = await data.api_login({ email, senha })
        if (!response.error) {
            res.cookie('jwt', response.data.token)
            res.cookie('id_vendedor', response.data.User.codvend)
            res.redirect('/dashboard');
        } else {
            res.render('./login/index', { error: response.error })
        }
    },
}