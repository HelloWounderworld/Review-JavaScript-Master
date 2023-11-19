const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Teramatsu',
    idade: 26,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// const { nome, sobrenome, idade } = pessoa;
// const { nome: teste = '', sobrenome, idade, endereco: { rua: r = 123456, numero }, endereco } = pessoa;
const { nome, ...resto } = pessoa;
// console.log(teste, sobrenome, idade);
// console.log(endereco);
// console.log(rua, numero);
// console.log(r, numero);
console.log(nome, resto);
console.log(pessoa.nome);

const person = {
    lasName: 'Teramatsu',
    age: 26,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

const { name = 'Não existe', lastName, age} = person;
console.log(name, lastName, age);
