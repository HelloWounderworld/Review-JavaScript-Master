for (let i = 0; i <= 5; i++) {
    console.log('range: ', i);
    console.log(`Linha ${i}`);
};

for (let i = -100; i <= 500; i++) {
    console.log(`Linha ${i}`);
};

for (let i = 500; i >= 400; i -=10) {
    console.log(`Linha ${i}`);
};

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
};

const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Laranja', 'Pitaya', 'Damasco'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
};
