// Seleciona o formulário do HTML pelo ID #formulario
const form = document.querySelector('#formulario');

// Escuta o evento de 'submit' (clique no botão de enviar)
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede que a página recarregue ao enviar o formulário

    // Captura os elementos de input dentro do formulário que foi enviado
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // Converte os valores dos inputs para o tipo Número
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Validação: Se o peso não for um número (NaN), exibe erro e para a execução
    if (!peso) {
        setResultado('Peso inválido.', false);
        return;
    }

    // Validação: Se a altura não for um número (NaN), exibe erro e para a execução
    if (!altura) {
        setResultado('Altura inválida.', false);
        return;
    }

    // Chama a função para calcular o valor numérico do IMC
    const imc = getImc(peso, altura);
    // Chama a função para obter o texto da categoria (ex: "Sobrepeso")
    const nivelImc = getNivelImc(imc);

    // Monta a frase de resultado usando Template Strings
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    // Exibe o resultado na tela com estilo de sucesso (true)
    setResultado(msg, true);
});


/* Função: Classifica o IMC baseado em faixas de valores
   Retorna: Uma string com a categoria
*/
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obsidade grau 1', 'Obsidade grau 2', 'Obsidade grau 1'];

    // Lógica de verificação de trás para frente (do maior para o menor)
    if (imc >= 39.9) return nivel[5]; 
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];        
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

/* Função: Calcula a conta matemática do IMC (peso / altura²)
   Retorna: O valor formatado com 2 casas decimais
*/
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

/* Função: Apenas cria um elemento de parágrafo <p> no "ar" (memória)
*/
function criaP () {
    const p = document.createElement('p');
    return p;
}

/* Função: Responsável por exibir a mensagem final no HTML
   Parâmetros: msg (o texto), isValid (booleano para definir a cor/estilo)
*/
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior antes de mostrar o novo

    const p = criaP(); // Cria o parágrafo usando a função auxiliar

    // Aplica uma classe CSS diferente dependendo se o dado é válido ou não
    if (isValid) {
        p.classList.add('paragrafo-resultado'); // Estilo verde/sucesso
    } else {
        p.classList.add('bad'); // Estilo vermelho/erro
    }

    p.innerHTML = msg; // Define o texto do parágrafo
    resultado.appendChild(p); // Adiciona o parágrafo dentro da div #resultado
}