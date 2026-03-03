const elementos = [
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'footer', texto: 'Frase 03'},
    {tag: 'section', texto: 'Frase 04'},
]

// Seleciona onde o conteúdo vai aparecer na página
const container = document.querySelector('.container');
// Cria um elemento "pai" temporário para agrupar tudo
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    // Extrai a tag e o texto do objeto atual da lista
    let {tag, texto} = elementos[i];
    // Cria a tag HTML dinamicamente (p, div, footer ou section)
    let tagCriada = document.createElement(tag);
    // Define o texto dentro da tag criada
    tagCriada.innerHTML = texto;
    // Coloca a tag nova dentro da nossa div agrupadora
    div.appendChild(tagCriada);
}

// Coloca a div com todos os elementos dentro do container principal
container.appendChild(div);