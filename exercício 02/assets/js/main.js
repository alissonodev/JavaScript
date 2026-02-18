const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

/**
 * Converte o número do dia (0-6) no nome do dia por extenso.
 */
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto

    switch (diaSemana) {
        case 0: diaSemanaTexto = 'domingo'; return diaSemanaTexto;
        case 1: diaSemanaTexto = 'segunda-feira'; return diaSemanaTexto;
        case 2: diaSemanaTexto = 'terça-feira'; return diaSemanaTexto;
        case 3: diaSemanaTexto = 'quarta-feira'; return diaSemanaTexto;
        case 4: diaSemanaTexto = 'quinta-feira'; return diaSemanaTexto;
        case 5: diaSemanaTexto = 'sexta-feira'; return diaSemanaTexto;            
        case 6: diaSemanaTexto = 'sábado'; return diaSemanaTexto;    
    }
} 

/**
 * Converte o número do mês (0-11) no nome do mês por extenso.
 */
function getNomeMes(numeroMes) {
    let nomeMes

    switch (numeroMes) {
        case 0: nomeMes = 'janeiro'; return nomeMes;
        case 1: nomeMes = 'fevereiro'; return nomeMes;
        case 2: nomeMes = 'março'; return nomeMes;
        case 3: nomeMes = 'abril'; return nomeMes;
        case 4: nomeMes = 'maio'; return nomeMes;
        case 5: nomeMes = 'junho'; return nomeMes; 
        case 6: nomeMes = 'julho'; return nomeMes;
        case 7: nomeMes = 'agosto'; return nomeMes;
        case 8: nomeMes = 'setembro'; return nomeMes;
        case 9: nomeMes = 'outubro'; return nomeMes;
        case 10: nomeMes = 'novembro'; return nomeMes;   
        case 11: nomeMes = 'dezembro'; return nomeMes;
    }    
} 

/**
 * Adiciona um zero à esquerda se o número for menor que 10.
 * Ex: 9 vira "09"
 */
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

/**
 * Une todas as informações para criar a frase final da data.
 */
function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

// Insere o texto formatado no elemento H1 da página
h1.innerHTML = criaData(data);