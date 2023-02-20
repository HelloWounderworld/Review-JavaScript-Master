// Escreva uma função que recebe 2 números e retorna o maior deles

function valorMaior (numero1, numero2) {
    // if (numero1 <= numero2) {
    //     return numero2;
    // }
    // return numero1;

    return numero1 < numero2 ? numero2 : numero1;
}

// const max2 = (x, y) => {
//     return x > y ? x : y;
// };

const max2 = (x, y) => x > y ? x : y;

console.log('Esse número é o maior:', valorMaior(1,2));
console.log(max2(10,20));
