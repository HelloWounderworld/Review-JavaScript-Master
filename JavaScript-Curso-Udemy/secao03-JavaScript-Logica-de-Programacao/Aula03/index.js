// > - Maior estrito
// console.log(10 > 5);
const comp = 10 > 5;
const comp0 = 10 > 11;
console.log(comp);
console.log(comp0);

// >= - Maior ou igual
const comp1 = 3 >= 2;
const comp2 = 3 >= 3;
const comp3 = 3 >= 4;
console.log(comp1);
console.log(comp2);
console.log(comp3);

// < - Menor estrito
const num1 = 3;
const num2 = 4;
const comp4 = num1 < num2;
const comp5 = num2 < num1;
console.log(comp4);
console.log(comp5);

// <= - Menor ou igual
const num3 = 3;
const comp6 = num1 <= num2;
const comp7 = num2 <= num1;
const comp8 = num1 <= num3;
console.log(comp6);
console.log(comp7);
console.log(comp8);

// == - Igualdade no sentido de apenas o valor
const num4 = 10;
const num5 = 10;
const num6 = '10';
const comp9 = num4 == num5;
const comp10 = num4 == num6; // Note que, comparamos um number e uma string
console.log(comp9);
console.log(comp10); // E essa comparação é possível, visto que o JavaScript é linguaegem de tipagem dinâmica fraca

// === - Iagualdade checando valor e o tipo
const comp11 = num4 === num6;
const comp12 = num4 === num5;
console.log(comp11); // Agora, além de comparar o valor, foi comparado o tipo e isso retornará false
console.log(comp12); // Tanto o valor quanto o tipo são iguais, então dará um true

// != - diferença no sentido de apenas o valor
const num7 = 10;
const num8 = 11;
const num9 = '11';
const comp13 = num7 != num8;
const comp14 = num7 != num9;
const comp15 = num8 != num9;
console.log(comp13);
console.log(comp14); // Note que, foi possível comparar um number com uma string com uma valor dentro
console.log(comp15); // Reforçando que é possível a comparação. Mesmo com os tipos diferentes

// !== - Diferença com valor e o tipo
const comp16 = num7 !== num9;
const comp17 = num8 !== num9;
const comp18 = num7 !== num8;
console.log(comp16);
console.log(comp17); // Agora, foi comparado não apenas o valor, mas, sim, o tipo tbm. Logo, é true, pois são tipos diferentes
console.log(comp18);
