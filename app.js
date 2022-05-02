require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.port || 3000
const routes = require('./routes')
require('./database')

app.use(express.json())
app.use('/', routes)

app.listen(PORT, function(){
    console.log(`Servidor foi iniciado na porta ${PORT}`)
})
