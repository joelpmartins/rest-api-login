const mongoose = require('mongoose')
const url = process.env.DB_URL

const connection = mongoose.connect(url).then(() => {
    console.log("Conexão com banco de dados realizada com sucesso!")
}).catch((e) => console.log(e))

module.exports = connection