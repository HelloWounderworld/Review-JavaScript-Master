function DateNow() {
    const dataAgora = document.querySelector('.data-agora');
    function DatePadraoConstrutor() {
        return new Date();
    };
    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
    };
    function diaAgora() {
        const dia = DatePadraoConstrutor();
        return dia.getDate();
    };
    function mesAgora() {
        const mes = DatePadraoConstrutor();
        
        switch(mes.getMonth()) {
            case 0:
                return 'janeiro';

            case 1:
                return 'fevereiro';

            case 2:
                return 'março';

            case 3:
                return 'abril';

            case 4:
                return 'maio';

            case 5:
                return 'junho';

            case 6:
                return 'julho';

            case 7:
                return 'agosto';

            case 8:
                return 'setembro';

            case 9:
                return 'outubro';

            case 10:
                return 'novembro';

            case 11:
                return 'dezembro';
        }
    };
    function anoAgora() {
        const ano = DatePadraoConstrutor();
        return ano.getFullYear();
    };
    function horaAgora() {
        const hora = DatePadraoConstrutor();
        return zeroAEsquerda(hora.getHours());
    };
    function minutoAgora() {
        const minuto = DatePadraoConstrutor();
        return zeroAEsquerda(minuto.getMinutes());
    };
    function diaDaSemanaAgora() {
        const diaDaSemana = DatePadraoConstrutor();

        switch(diaDaSemana.getDay()) {
            case 0:
                return 'domingo';

            case 1:
                return 'segunda-feira';

            case 2:
                return 'terça-feira';

            case 3:
                return 'quarta-feira';

            case 4:
                return 'quinta-feira';

            case 5:
                return 'sexta-feira';

            case 6:
                return 'sábado';
        }
    };
    dataAgora.innerHTML = `${diaDaSemanaAgora()}, ${diaAgora()} de ${mesAgora()} de ${anoAgora()} ${horaAgora()}:${minutoAgora()}`;
};
DateNow();