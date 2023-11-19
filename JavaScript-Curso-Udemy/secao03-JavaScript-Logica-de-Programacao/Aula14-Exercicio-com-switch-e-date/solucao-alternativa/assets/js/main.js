const h1 = document.querySelector('.container h1'); // Uma maneira de selecionar a classe e a tag, na qual contém dentro dela.
const data = new Date();

function getDayOfWeek (dayOfWeek) {
    let diaSemanaTexto;
    switch (dayOfWeek) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
    
        case 1: 
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
    
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
    
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
    
        case 4: 
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
    
        case 6:
            diaSemanaTexto = 'sábado';
            return diaSemanaTexto;
    
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto; // break no default é opcional.
    }
}

function getNameOfMonth (nameOfMonth) {
    let nomeMes;
    switch(nameOfMonth) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;

        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;

        case 2:
            nomeMes = 'março';
            return nomeMes;

        case 3:
            nomeMes = 'abril';
            return nomeMes;

        case 4:
            nomeMes = 'maio';
            return nomeMes;

        case 5:
            nomeMes = 'junho';
            return nomeMes;

        case 6:
            nomeMes = 'julho';
            return nomeMes;

        case 7:
            nomeMes = 'agosto';
            return nomeMes;

        case 8:
            nomeMes = 'setembro';
            return nomeMes;

        case 9:
            nomeMes = 'outubro';
            return nomeMes;

        case 10:
            nomeMes = 'novembro';
            return nomeMes;

        case 11:
            nomeMes = 'dezembro';
            return nomeMes;
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaDate(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDayOfWeek(diaSemana);
    const nomeMes = getNameOfMonth(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

h1.innerHTML = criaDate(data);
