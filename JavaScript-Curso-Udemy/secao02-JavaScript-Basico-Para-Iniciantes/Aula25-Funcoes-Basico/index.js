// function saudacao(nome) {
//     // console.log(`Bom dia ${nome}`);
//     return `Bom dia ${nome}`;
// }

// // Executando uma função.
// saudacao('Leonardo');

// const variavel = saudacao('Takashi');
// console.log(variavel);

// function soma(x = 1, y = 1) {
//     const resultado = x + y;
//     return resultado;
//     // console.log('Hello WounderWorld');
// }

// console.log(soma(2, 2));
// console.log(soma(6, 1));
// console.log(soma(0, 2));
// // console.log(resultado);
// const resultado = soma(3, 3);
// console.log(resultado);

// const semParametro = soma();
// console.log(semParametro);

// Nesse caso, precisa do ponto e vírgula
const raiz = function (n) {
    return Math.sqrt(n);
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// Usando arrow function
const root = (n) => {
    return Math.sqrt(n);
};

console.log(root(9));
console.log(root(16));
console.log(root(25));

const root2 = n => Math.sqrt(n);

console.log(root2(9));
console.log(root2(16));
console.log(root2(25));
