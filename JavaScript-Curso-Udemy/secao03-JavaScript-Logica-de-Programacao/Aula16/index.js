let a = 'A';
let b = 'B';
let c = 'C';

// const numeros = [1, 2, 3];
const letras = [c, a, b];
[a, b, c] = letras;

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];
const [primeiroNumero, segundoNumero] = numeros;
const [FirstNumber, ...SecondNumber] = numeros;
const [um, , tres, , cinco, , sete] = numeros;

console.log(numeros);
console.log(primeiroNumero, segundoNumero);
console.log(FirstNumber, SecondNumber);
console.log(um, tres, cinco, sete);

const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [linha1, linha2, linha3] = numbers;
const [, [, , seis]] = numbers;
console.log(numbers[1][2]);
console.log(seis);
console.log(linha1);
console.log(linha2);
console.log(linha3);
