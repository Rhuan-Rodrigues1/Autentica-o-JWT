const express = require('express')
const router = express.Router()
const authMiddleware = require('../Middlewares/auth')

router.use(authMiddleware)

router.get('/', (req, res)=>{
    res.send({ 
        ok: true
    })
})


module.exports = app => app.use('/projects', router)