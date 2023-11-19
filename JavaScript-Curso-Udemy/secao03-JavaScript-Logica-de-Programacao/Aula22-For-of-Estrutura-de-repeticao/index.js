const nome = 'Leonardo Takashi Teramatsu';

for (let valor of nome) {
    console.log(valor);
}

const nomes = ['Leonardo', 'João', 'Lucas'];

for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function(el, i, array) {
    console.log(el, i, array);
});

// for (let i in nome) {
//     console.log(i, nome[i]);
// }
