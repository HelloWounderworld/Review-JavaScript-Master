const alunos = ['Leonardo', 'Luiz', 'João', 1, true, {Estado: 'SP'}, function() { return 'Hello WounderWorld'}, null, undefined];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);
console.log(alunos[6]());

alunos[2] = 'Newton';

console.log(alunos);
console.log(alunos[2]);

// Inserindo elemento em um índice que não existe
const indiceNovo = ['Leonardo', 'Marcos', 'João'];

console.log(indiceNovo);

indiceNovo[5] = 'Luiz';

console.log(indiceNovo);

// Dá o tamanho do array
console.log(alunos.length);

// Inserindo elemento no último da lista
alunos[alunos.length] = 'Eduardo';
alunos[alunos.length] = 'Max';
alunos[alunos.length] = 'Einstein';
console.log(alunos);

alunos.push('Lucas');
console.log(alunos);

// Adicionando no primeiro lugar na lista
alunos.unshift('Primeiro lugar');

console.log(alunos);

// Excluindo o elemento pelo último
const removido = alunos.pop();

console.log(removido);
console.log(alunos);

// Remove do início
const removeInicio = alunos.shift();

console.log(removeInicio);
console.log(alunos);

// Apagando um elemento pelo índice
console.log(alunos[5]);
delete alunos[5];

console.log(alunos);

// Pedindo para exibir um índice inexistente
console.log(alunos[1000]);

// Fatiando a lista
console.log(alunos.slice(0,7));
console.log(alunos.slice(0,alunos.length));
console.log(alunos.slice(0,-1));
console.log(alunos.slice(0,-2));

// Tipo
console.log(typeof alunos);
console.log(typeof {});

console.log(alunos instanceof Array);
console.log({} instanceof Array);

console.log(alunos instanceof Object);
console.log({} instanceof Object);
