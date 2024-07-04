const knex = require('../conexao');
const path = require('path');

const exibir = async (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/index.html'));
}

const cadastrarMarcacao = async (req, res) => {
    const { datamarcada } = req.body;

    console.log(datamarcada)
    if (!datamarcada) {
        return res.status(400).json({ mensagem: "Todos os campos têm que estar preenchidos" });
    }

    try {
       
        const novaMarcacao = await knex('marcacao').insert({
            datamarcada: datamarcada
        }).returning('*')

        // Exemplo de resposta de sucesso
        res.status(200).json({ message: 'Marcarção com sucesso'});

    } catch (error) {
        console.error('Erro ao processar marcação:', error);
        res.status(500).json({ error: 'Erro ao processar marcação.' });
    }
}


module.exports = {
    exibir,
   cadastrarMarcacao
};
