const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container')

for (let i = 0; i < elementos.length; i++) {
    const tag = document.createElement(elementos[i].tag);
    tag.innerHTML = `${elementos[i].texto}`;
    container.appendChild(tag);
}
