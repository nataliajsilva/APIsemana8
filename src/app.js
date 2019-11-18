const express = require('express')
const app = express()

// rotas
const index = require('./routes/index')
const usuarios = require('./routes/usuariosRoute')

app.use(function (request, response, next) { 
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Acecept')
    next()
})

app.use('/', index)
app.use('/usuarios', usuarios)

module.exports = app