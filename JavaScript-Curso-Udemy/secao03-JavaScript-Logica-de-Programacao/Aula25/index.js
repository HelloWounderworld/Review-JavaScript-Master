const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 7) {
        console.log(`Achei o número ${numero}`);
        break;
    }

    if (numero === 2 || numero === 5) {
        console.log(`Puleir o o número ${numero}`);
        continue;
    }

    console.log(numero);
}

console.log('Vida que segue!');

let i = 0;

while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log(`Pulei o número ${numero}`);
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log(`${numero} encontrado, saindo...`);
        i++;
        break;
    }

    i++;
}

console.log('Vida que segue!');
