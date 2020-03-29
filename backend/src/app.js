const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

//Crio a aplicação e salvo na variável app
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

//Faço a aplicação ser acessível pela porta 3333 no navegador, por digitar "localhost:3333"
//Faço isso para não ouvir o app pela porta 80 padrão, pq pode ser problemática com varias aplicações
module.exports = app;

