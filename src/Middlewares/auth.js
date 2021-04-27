const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')


module.exports = (req, res, next)=>{
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).send({
            mensagem: 'error: No token provided'
        })
    }

    const parts = authHeader.split(' ')

    if(!parts.length === 2){
        return res.status(401).send({
            mensagem: 'error: Token error'
        })
    }

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({
            mensagem: 'error: Tokken malformatted'
        })
    }


    jwt.verify(token, authConfig.secret, (err, decoded) =>{
        if(err){
            res.status(401).send({
                mensagem: 'error: Token invalid'
            })
        }

        req.userId = decoded.id
        return next()
    })
}