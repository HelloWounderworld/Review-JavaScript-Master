const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    // Uma outra alternativa tbm é usar o createTextNode
    // em vez de usar o innerText dentro de tagCriada
    let textoCriado = document.createTextNode(texto);
    // tagCriada.innerHTML = texto;
    // Em vez de usar o innerHTML, pois ela é mais útil quando
    // dentro da string que eu estiver passando tiver alguma tag definida
    // Você poderia usar o innerText
    // tagCriada.innerText = texto;
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);
