// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function fizzBuzz(numero) {
    const retornos = ['Fizz', 'Buzz'];
    if (typeof numero !== 'number') return numero;
        // if (numero % 15 === 0) {
        //     return retornos[0] + retornos[1];
        // } else if (numero % 3 === 0) {
        //     return retornos[0];
        // } else if (numero % 5 === 0) {
        //     return retornos[1]
        // } else {
        //     return numero
        // }
    if (numero % 15 === 0) return retornos[0] + retornos[1];
    if (numero % 3 === 0) return retornos[0];
    if (numero % 5 ===0) return retornos[1];
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
};
