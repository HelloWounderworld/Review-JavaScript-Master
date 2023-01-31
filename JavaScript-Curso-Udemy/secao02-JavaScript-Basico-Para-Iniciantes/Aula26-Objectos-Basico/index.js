// Array
const array = [1, 2, 3];

array.push(4);
array[0] = 'Leonardo';
console.log(array);

// Objeto
const pessoa1 = {
    nome: 'Leonardo',
    sobrenome: 'Teramatsu',
    idade: 26
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// Padronizando a criacao de um objeto via função
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa2 = criaPessoa('Leonardo', 'Teramatsu', 26);
console.log(pessoa2.nome);

function criaPessoa2(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa3 = criaPessoa2('Leonardo', 'Teramatsu', 26);
console.log(pessoa3.nome);

// Definindo funções dentro do objeto - método
const pessoal = {
    nome: 'Leonardo',
    sobrenome: 'Teramatsu',
    idade: 26,
    fala() {
        console.log('Hello WounderWorld');
        console.log(`${this.nome}`);
        console.log(`${this.sobrenome}`);
        console.log(this.idade);
    },
    incrementaIdade() {
        ++this.idade;
    }
}

pessoal.fala();
console.log(pessoal.idade);
pessoal.incrementaIdade();
pessoal.fala();
console.log(pessoal.idade);
