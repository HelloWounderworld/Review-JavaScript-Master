// const data = new Date();
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2023, 1, 7, 15, 46, 50, 5000);
// const data = new Date(2023, 1, 7, 15, 46, 50);
// const data = new Date(2023, 1, 7, 15, 46);
// const data = new Date(2023, 1, 7, 15);
// const data = new Date(2023, 1, 7);
// const data = new Date(2023, 1);
// const data = new Date('2023-02-07');
// const data = new Date('2023-02-07 15:57:40');
// const data = new Date('2023-02-07T15:57:40.500');
// console.log(data.toString());
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('Milissegundo', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());

// console.log(Date.now());
// console.log(new Date(Date.now()));

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
