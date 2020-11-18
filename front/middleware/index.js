module.exports = (req, res, next) => {
    let { jwt } = req.cookies
    if (jwt) {
        next()
    } else {
        res.redirect('/')
    }
}