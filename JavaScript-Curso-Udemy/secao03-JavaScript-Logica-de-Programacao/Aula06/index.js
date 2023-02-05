const hora = 50;

if(0 < hora && hora <= 12) {
    console.log('Bom dia!');
} else if (12 < hora && hora <=17) {
    console.log('Boa tarde!');
} else if (17 < hora && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá!');
}

const tenhoGrana = true;

if(tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
