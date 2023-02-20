// Escreva uma função chamada ePaisagem que
// recebe dois argumentos, larguna e altura
// de uma imagem (number).
// Retorne true e se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
    // return largura >= altura ? 'landscape' : 'portrait';
    return largura >= altura;
}

const Imagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1080, 720));
console.log(Imagem(1920, 1080));
