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

















/*require('dotenv').config()

const express = require('express')
//const mongoose = require('mongoose')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

require('./database')

const app = express()

app.use(express.json())

const User = require("./models/user.model")

app.listen(3000, function(){
    console.log(`Servidor foi iniciado na porta`)
})*/