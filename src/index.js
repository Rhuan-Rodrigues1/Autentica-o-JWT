const express = require('express');
const bodyParser = require('body-parser')

const app = express()

//Config
    //body-parser
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())


app.get('/', (req, res)=>{
    res.status(200).send({
        mensagem: 'Servido rodando !'
    })
})

require('./controllers/authControlers')(app)
require('./controllers/projectControler')(app)

app.listen(3000, ()=>{
    console.log('Servidor rodando: http://localhost:3000')
})