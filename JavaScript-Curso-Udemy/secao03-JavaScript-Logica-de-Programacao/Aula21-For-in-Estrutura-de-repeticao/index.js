const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(i);
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Teramatsu',
    idade: 26
};

for (let i in pessoa) {
    console.log(i, pessoa[i]);
};
