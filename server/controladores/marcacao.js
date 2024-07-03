const knex = require('../conexao')
const path = require('path');

const exibir = async(req,res) =>{
    res.sendFile(path.join(__dirname, '../../src/index.html'));
}

const atualizarMarcacao = async (req, res) => {
    try {
        const { dia } = req.body; // Recebe o número do dia marcado do corpo da requisição

        // Aqui você pode implementar a lógica para atualizar a marcação do dia
        // Exemplo: armazenar o dia marcado em um banco de dados, etc.
        // Supondo que você armazenará em algum lugar e depois retornará uma resposta de sucesso

        console.log(`Dia marcado: ${dia}`);

        // Exemplo de resposta de sucesso
        res.status(200).json({ message: `Dia ${dia} marcado com sucesso.` });
    } catch (error) {
        console.error('Erro ao processar marcação:', error);
        res.status(500).json({ error: 'Erro ao processar marcação.' });
    }
};

module.exports = {
    exibir,
    atualizarMarcacao
}