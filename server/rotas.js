const express = require('express')
const {exibir, atualizarMarcacao} = require('./controladores/marcacao')
const rotas = express()
rotas.use(express.json())
const cors = require('cors')

const path = require('path')
rotas.use(cors());

rotas.use(express.static(path.join(__dirname, 'src')));

rotas.get('/', exibir)
rotas.post('/marcar-horario', atualizarMarcacao)

module.exports = rotas 