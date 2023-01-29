let num1 = 1;
let num2 = 2.5;

console.log(num1 + num2);

// toString()
console.log(num1.toString() + num2);
console.log(typeof num1);

// Transformando um núemro em binário usando o toString
let num3 = 1500;

console.log(num3.toString(2));

// toFixed arredondamento
let num4 = 10.545154841618915156;

console.log(num4.toFixed(2));
console.log(num4.toFixed(3));
console.log(num4.toFixed(4));

// Conferindo se um núemro é inteirou ou não
let num5 = 10;
let num6 = 2.5;

console.log(Number.isInteger(num5));
console.log(Number.isInteger(num6));

// Confeirndo se é NaN ou não
let num7 = 2;
let temp = num7 * 'Hello';

console.log(Number.isNaN(temp));
console.log(Number.isNaN(num7));

// IEEE 754-2008
// Padrão de imprecisão com números em JavaScript
let num8 = 0.7;
let num9 = 0.1;

console.log(num8 + num9);

num8 += num9;

console.log(num8);

num8 += num9;
num8 += num9;

console.log(num8);

num8 = num8.toFixed(2);

console.log(num8);
console.log(Number.isInteger(num8));
console.log(Number.isInteger(1.00));

let num10 = 0.7;

num10 += num9;
num10 += num9;
num10 += num9;

num10 = parseFloat(num10.toFixed(2));
// ou num10 = Number(num10.toFixed(2));

console.log(num10);
console.log(Number.isInteger(num10));

// Outra forma de resolver
let num11 = 0.7;
let num12 = 0.1;

num11 = ((num11 * 100) + (num12 * 100)) / 100;
num11 = ((num11 * 100) + (num12 * 100)) / 100;
num11 = ((num11 * 100) + (num12 * 100)) / 100;

console.log(num11);
console.log(Number.isInteger(num11));
