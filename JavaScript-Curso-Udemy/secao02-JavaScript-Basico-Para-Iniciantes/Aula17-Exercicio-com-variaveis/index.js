let varA = 'A';
let varB = 'B';
let varC = 'C';

// É bem evidente o que será retornado no terminal, certo?
console.log(varA, varB, varC);

// Agora, vamos fazer o seguinte
// Quero que o valor de varA aponte para o valor de varB, valor de varB aponte para o valor de varC e, por fim, valor de varC aponte para o valor de varA.
// Claro, sem declarar as variáveis let da seguinte forma
// varA = 'B';
// varB = 'C';
// varC = 'A';
// Claro que o formato acima seria uma solução, mas não é o que queremos.
// A forma que quero que vc resolva seria sem a necessidade de fazer a declaração de cima e conseguir realizar tais apontamentos somente com as três variáveis prontas.
// Ou seja, sem que vc digite os valores literais, mas sim varA = varB, por exemplo.
// Solução: Tenta fazer isso em um único passo de algoritmo.

// Forma mais simples de resolver.
// const varAFixo = varA;
// varA = varB;
// varB = varC;
// varC = varAFixo;

// Maneira moderna. (Foi o que eu pensei, mas só não sabia que era preciso o colchetes kkkkkkk)
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
