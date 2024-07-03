// Seleciona todos os elementos com a classe .available (dias selecionáveis)
document.querySelectorAll(".available").forEach(e => {
    e.addEventListener("click", i => {
        const selecionado = i.currentTarget;
        
        // Remove a cor de fundo de todos os dias antes de selecionar o novo
        document.querySelectorAll(".available").forEach(dia => {
            dia.style.backgroundColor = '';
        });

        // Adiciona cor de fundo ao dia selecionado
        selecionado.style.backgroundColor = '#f00';

        // Armazena a data selecionada para uso posterior
        const dataSelecionada = selecionado.textContent.trim();

        // Define a data selecionada no input hidden (se necessário para o backend)
        // Exemplo: document.getElementById('dataSelecionada').value = dataSelecionada;
    });
});

// Evento de clique no botão para enviar a data selecionada
const btnEnviar = document.getElementById("botao");
console.log("tudo fora");

btnEnviar.addEventListener('click', async evento => {
    try {
        // Obtém a data selecionada do calendário (supondo que você a tenha armazenado)
        const dataSelecionada = document.querySelector(".available[style='background-color: rgb(255, 0, 0);']").textContent.trim();

        // Verifica se uma data foi selecionada
        if (!dataSelecionada) {
            throw new Error('Por favor, selecione um dia.');
        }

        // Construir os dados que você quer enviar para o backend
        const dadosParaEnviar = {
            dataMarcada: dataSelecionada
        };
        console.log(dataSelecionada)
        // Uso do fetch para enviar dados
        const resposta = await fetch('http://localhost:3000/marcar-horario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Tipo de conteúdo sendo enviado (JSON)
            },
            body: JSON.stringify(dadosParaEnviar)
        });

        if (!resposta.ok) {
            throw new Error('Erro ao enviar os dados.'); // Trata erro caso a resposta não seja OK
        }

        const resultado = await resposta.json(); // Processa a resposta JSON do backend, se necessário
        console.log('Dados enviados com sucesso:', resultado);
    } catch (erro) {
        console.error('Erro durante o envio dos dados:', erro);
    }
});
