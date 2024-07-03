const knex = require('../conexao');
const path = require('path');

const exibir = async (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/index.html'));
}

const atualizarMarcacao = async (req, res) => {
    const { dataMarcada } = req.body;

    console.log(`Dia marcado: ${dataMarcada}`);
    if (!dataMarcada) {
        return res.status(400).json({ mensagem: "Todos os campos têm que estar preenchidos" });
    }

    try {
        const diaJaMarcado = await knex('marcacao').where({
            dataMarcada: dataMarcada
        }).first();

        if (diaJaMarcado) {
            return res.status(400).json({ mensagem: 'Já existe este dia marcado' });
        }

        const novaMarcacao = await knex('marcacao').insert({
            dataMarcada: dataMarcada
        }).returning('*');

        // Obtemos corretamente o valor de dataMarcada do resultado da inserção
        const dataMarcadaInserida = novaMarcacao[0].dataMarcada;

        // Exemplo de resposta de sucesso
        res.status(200).json({ message: `Dia ${dataMarcadaInserida} marcado com sucesso.` });

    } catch (error) {
        console.error('Erro ao processar marcação:', error);
        res.status(500).json({ error: 'Erro ao processar marcação.' });
    }
}


module.exports = {
    exibir,
    atualizarMarcacao
};
