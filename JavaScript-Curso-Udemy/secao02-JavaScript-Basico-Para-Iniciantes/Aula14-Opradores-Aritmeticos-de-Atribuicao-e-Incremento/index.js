/*
    Aritméticos:
    + Adição / Concatenação
    - Subtração
    / Divisão
    * Multiplicação
    ** Potenciação
    % Resto da divisão
 */
const num1 = 5;
const num2 = 10;
const num3 = 7;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num2 % num1);
console.log(num1 % num2);
console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);
console.log(num1 * num2 / num3);

let contador = 1;
contador++; // é o mesmo que contador = contador + 1
console.log(contador);
contador--; // é o mesmo que contador = contador - 1
console.log(contador)

let contador2 = 1;
++contador2;
console.log(contador2);
--contador2;
console.log(contador2);

let contadorPos = 1;
console.log(contadorPos++);
console.log(contadorPos);

let contadorPre = 1;
console.log(++contadorPre);
console.log(contadorPre);

let razao = 2
let contadorOutros = 0;
contadorOutros = contadorOutros + razao;
console.log(contadorOutros);
contadorOutros = contadorOutros + razao;
console.log(contadorOutros);
contadorOutros = contadorOutros + razao;
console.log(contadorOutros);
contadorOutros = contadorOutros + razao;
console.log(contadorOutros);

let r = 5;
let contadorAbrevia = 0;
contadorAbrevia += r; // é o mesmo que contadorAbrevia = contadorAbrevia + r.
console.log(contadorAbrevia);
contadorAbrevia += r;
console.log(contadorAbrevia);
contadorAbrevia += r;
console.log(contadorAbrevia);

let numero1 = 10;
let numero2 = 'Leonardo';
console.log(numero1 * numero2);

let n1 = 10;
let n2 = parseInt('5');
let n3 = parseInt('5.2');
let n4 = parseFloat('5.2');
let n5 = Number('5');
let n6 = Number('5.2');
console.log(n1 + n2);
console.log(typeof n2);
console.log(n1 * n2);
console.log(n3);
console.log(n4);
console.log(n5, n6);
