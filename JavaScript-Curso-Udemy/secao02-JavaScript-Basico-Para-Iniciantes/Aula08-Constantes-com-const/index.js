// const nome = 'João';
// console.log(nome);

// Não dá para declarar uma constante
// const nome;

// Não dá para mudar o valor da constante
// const nome = 'João';
// nome = 'Leonardo';

// Podemos atribuir o valor da const em outras variáveis.
// Operações aritméticos, as 4 principais: +, -, *, /
const primeiroNumero = '5';
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
console.log(typeof primeiroNumero + segundoNumero);
console.log(typeof(typeof primeiroNumero + segundoNumero));
console.log(typeof(primeiroNumero + segundoNumero));
