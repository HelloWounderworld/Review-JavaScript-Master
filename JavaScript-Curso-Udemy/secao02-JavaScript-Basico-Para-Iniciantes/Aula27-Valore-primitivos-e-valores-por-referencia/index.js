/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
*/
let nome = 'Leonardo';
nome = 'Takashi';
// console.log(nome);

nome[0] = 'R';
console.log(nome[0], nome);

// Característica de valor primitivo, cópia
let a = 'A';
let b = a;
a = 'Outra coisa';
// b = 'B';
console.log(a, b);

/*
Referência (mutável) - Arrays, Objetos, Function
*/
let a1 = [1, 2, 3];
let b1 = a1;
let c1 = b1;
b1[0] = 5;
console.log(a1, b1);

a1.push(4);
console.log(a1, b1);

b1.pop();
console.log(a1, b1);

a1.push('Leonardo');
console.log(c1);

// Copiando um valor de referência - array
let a2 = [1, 2, 3];
let b2 = [...a2];
let c2 = a2;
b2[0] = 5;
console.log(a2, b2);

a2.push(4);
console.log(a2, b2);

b2.pop();
console.log(a2, b2);

a2.push('Leonardo');
console.log(a2, b2, c2);

// Object
const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Teramatsu'
};
const pessoa2 = pessoa;

pessoa.nome = 'Luiz';
console.log(pessoa2);

// Copiando
let people = {
    nome: 'Leonardo',
    sobrenome: 'Teramatsu'
};
let people2 = {...people};

people.nome;
console.log(people2);
