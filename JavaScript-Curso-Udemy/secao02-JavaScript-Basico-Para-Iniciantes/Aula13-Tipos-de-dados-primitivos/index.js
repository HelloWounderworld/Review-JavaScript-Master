// strings
const nome = 'Leonardo';
const nome1 = "Leonardo";
const nome2 = `Leonardo`; // No caso da crase, podemos usar as template strings, ${}, como foi visto nas aulas anteriores.

// number
const num1 = 10;
const num2 = 10.52;

// Undefined
let nomeAluno; // undefined -> não aponta para local nenhuma na memória.

// Nulo, não é igual ao undefined. No caso, se usa quando queremos desconfigurar o valor de uma variável.
// Uma obsercação importante: Para o JavaScript, o null é considerado um objeto. Entretanto, o null não se enquadradia como objeto no seu uso prático.
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória.
console.log(typeof sobrenomeAluno, sobrenomeAluno);

// Booleano - No caso, esses são muito usado em lógicas condicionais e prosicional. Porém, a maioria das vezes usamos por vias de alguma relação, e não de forma tão explícita como está aqui.
// Existem casos sim em que vc usa ela de forma explícita, como em casos de vc verificar alunos aprovados ou não;
const boolean = true; // ou false

// Dados passados por referência
const a = [1, 2];
const b = a; // O sinal "=" é um operador de atribuição.
console.log(a, b);

b.push(3);
console.log(a, b);

// Agora, presta atenção no seguinte
let a1 = 2;
let b1 = a1;
console.log(a1, b1);
// Aqui acima, realmente foi feito uma cópia.

a1 = 3;
console.log(a1, b1);
