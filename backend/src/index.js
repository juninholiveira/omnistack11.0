const express = require('express')
const cors = require('cors')
const routes = require('./routes')

//Crio a aplicação e salvo na variável app
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

//Faço a aplicação ser acessível pela porta 3333 no navegador, por digitar "localhost:3333"
//Faço isso para não ouvir o app pela porta 80 padrão, pq pode ser problemática com varias aplicações
app.listen(3333)

