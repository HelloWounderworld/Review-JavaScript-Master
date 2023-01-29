// Arredondando para baixo
let num1 = 9.54578;
let num2 = Math.floor(num1);

console.log(num1);
console.log(num2);

// Arredondando para cima
let num3 = 9.54578;
let num4 = Math.ceil(num3);

console.log(num3);
console.log(num4);

// Round - Arredondamento
let num5 = 9.54578;
let num6 = Math.round(num5);

let num7 = 9.44578;
let num8 = Math.round(num7);

console.log(num5);
console.log(num6);

console.log(num7);
console.log(num8);

// Pegando o máximo de um conjunto
console.log(Math.max(1,2,3,-10,8,2301));

// Pegando o mínimo de um conjunto
console.log(Math.min(1,2,3,-10,8,2301));

// Random
console.log(Math.random());

// Pi
console.log(Math.PI);

// Potenciação
console.log(Math.pow(2,10)); // 2^10
console.log(2 ** 10); // é a mesma coisa

// Raíz quadrada
console.log(Math.sqrt(9));
console.log(Math.sqrt(5));
console.log(Math.sqrt(3));

// Inifinito
console.log(100/0);
console.log(100/0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);
console.log(!!(100/0));