// O que vc consegue fazer em strings
let umaString = 'Um texto';
let umaString1 = 'Um "texto"';
let umaString2 = "Um \"texto\""; // Caso vc queira usar aspas duplas e continuar usar aspas duplas.
let umaString3 = 'Um \'texto\''; // Caso vc queira usar aspas e continuar usar aspas duplas.
let umaString4 = 'Um \\texto'; // Caso vc quiser colocar "\" dentro do texto.
let umaString5 = 'Um \texto'; // Isso vira um tab

console.log(umaString);
console.log(umaString1);
console.log(umaString2);
console.log(umaString3);
console.log(umaString4);
console.log(umaString5);

// Podemos iterar as strings tbm como uma lista
//              01234567 
let umaFrase = 'Um texto';
console.log(umaFrase[0]);
console.log(umaFrase[4]);
console.log(umaFrase[8]); // Irá retornar undefined, pois não existe esse elemento definido.
console.log(umaFrase[-1]); // Também retornará undefined, não é que nem no python.

// Método charAt
console.log(umaFrase.charAt(0)); // Uma outra forma de consultar os elementos de cada posição.
console.log(umaFrase.charAt(8)); // No caso anterior era retornado undefined, mas nesse caso ele irá retornar um vazio.

// Método concat
console.log(umaFrase.concat(' ', 'em', ' ', 'um')); // Função que concatena a String.

// String template
console.log(`${umaFrase} em um lindo dia.`); // String template.

// Método indexOf
console.log(umaFrase.indexOf('texto')); // Permite verificar se a palavra existe e em que posição ela começa
console.log(umaFrase.indexOf('Texto')); // Visto que a palavra não existe será retornado -1.
console.log(umaFrase.indexOf('Um', 3)); // Quando colocamos uma String primeiro e no segundo parâmetro um número, estamos perguntando se a tal palavra está exatamente ou depois desse índice. Claro que, nesse caso não, então irá retornar -1.
console.log(umaFrase.indexOf('o', 3)); // Nesse caso irá retornar sim, que é o 7, a posição onde se encontra a palavra "o".
console.log(umaFrase.indexOf('x', 6)); // Irá retornar -1, pois essa palavra se encontra antes dessa posição.

// Método lastIndexOf
console.log(umaFrase.lastIndexOf('o')); // No caso, esse método ele faz o indexOf, mas de trás para frente.
console.log(umaFrase.lastIndexOf('o', 3)); // Nesse caso aqui, o segundo parâmetro serve para começar a partir da posição dele, mas como ela irá analisar de trás para frente, então irá analisar as posições menores e iguais ao valor colocado. Nesse caso, como a palavra não existe nessa posição e nem menos depois dela, será devolvido -1.
console.log(umaFrase.lastIndexOf('m', 3)); // Nesse caso aqui, será retornado a posição em que o "m" se encontra.

// Método match
console.log(umaFrase.match(/[a-z]/g)); // Ela irá retornar uma lista de expressão regulares, ou seja, irá retornar uma lista de todas as letras minúsculas desse texto.
console.log(umaFrase.match(/[a-z]/)); // Aplicando sem a flag "g", ela irá retornar o seguinte: [ 'm', index: 1, input: 'Um texto', groups: undefined ]

// Método search
console.log(umaFrase.search(/[a-z]/)); // Isso irá retornar o índice em que foi encontrado.
console.log(umaFrase.search(/[a-z]/g)); // Aqui, no caso, tanto faz ter a flag "g" ou não, serão retornados o valor 1.
console.log(umaFrase.search(/x/)); // Aqui, no caso, estou realmente consultando a posição que se encontra a letra x, que é 5.

// Método replace
console.log(umaFrase.replace('Um', 'Outra')); // Aqui estará substituindo a palavra "Um" para palavra "Outra".
console.log(umaFrase.replace(/Um/, 'Outra')); // Fazendo a mesma coisa utilizando a expressão regular.

let umaFrase1 = 'O rato roeu a roupa do rei de roma';
console.log(umaFrase1.replace(/r/, '#')); // Note que, só foi sustituído apenas o primeiro "r" que aparece na iteração.
console.log(umaFrase1.replace(/r/g, '#')); // Se vc quiser que isso aconteça para todos os r's, vc terá que acrescentar a flag "g".

// Método lenght
console.log(umaFrase1.length); // Irá retornar o comprimento da string, mas no sentido um conjunto natural que mostra n valores, ou seja, n = {n-1, n-2, ..., 2, 1, 0}.
console.log(umaFrase.length);

// Método slice
console.log(umaFrase1.slice(2, 6)); // No caso, o slice, como o nome já disse, ele pega uma fatia da string. No caso, o primero parâmetro vc diz a posição em que começa e o segundo parâmetro a posição em que termina, no índice antecessor. No caso, na aplicação (2,6), será pego exatamente a partir da posição 2 e irá até o 5.
console.log(umaFrase1.slice(-3)); // Já aqui é possível realizar uma fatia inversa, especificando com índice negativo mesmo. A contagem negativo vai de -1 por trás. Ou seja, -1 seria a partir de "a", visto que a frase termina em "roma", e assim o -2  seria o "m", sucessivamente.
console.log(umaFrase1.slice(31)); // Se colocarmos apenas um parâmetro, sigifica que estamos fatiando a paritr da exata posição pela frente.
console.log(umaFrase1.slice(-1));
console.log(umaFrase1.slice(-4, -1)); // Ou seja, o -1 não foi considerado de trás para frente.
console.log(umaFrase1.slice(-4));

// Método substring
console.log(umaFrase1.substring(umaFrase.length - 4, umaFrase.length - 1)); // Substring é o mesmo que o slice.

// Método split
console.log(umaFrase1.split(' ')); // Essa eu uso direto!
console.log(umaFrase1.split('r'));
console.log(umaFrase1.split(' ', 2)); // O segundo parâmetro ele indica até quantas vezes vc quer que seja feito o split em relação ao primeiro parâmetro.

// Método toUpperCase e toLowerCase
console.log(umaFrase1.toLowerCase);
console.log(umaFrase1.toUpperCase);
