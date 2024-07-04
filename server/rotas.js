const express = require('express')
const {exibir, cadastrarMarcacao} = require('./controladores/marcacao')
const rotas = express()
rotas.use(express.json())
const cors = require('cors')

const path = require('path')
rotas.use(cors());

rotas.use(express.static(path.join(__dirname, 'src')));

rotas.get('/', exibir)
rotas.post('/marcar-horario', cadastrarMarcacao)

module.exports = rotas 