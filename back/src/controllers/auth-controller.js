'user strict'
const express = require('express')
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    console.log(req.idUser);
   return res.send({Ok: true, user:req.idUser})
})

module.exports = router;
