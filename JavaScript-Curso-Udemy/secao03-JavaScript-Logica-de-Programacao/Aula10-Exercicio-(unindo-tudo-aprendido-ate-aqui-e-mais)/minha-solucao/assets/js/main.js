// Solução do exercício
function CalculaIMC () {
    const form = document.getElementById('formulario');

    function criaP() {
        // createElement - Cria uma tag
        const p = document.createElement('p');
        return p;
    };
    function IMC(peso, altura) {
        return (peso / altura ** 2).toFixed(2);
    };
    function msgPadrao(Imc) {
        return `Seu IMC é ${Imc} (${getNivelImc(Imc)})`;
    };
    function getNivelImc(IMC) {
        const niveis = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obresidade grau 2', 'Obesidade grau 3'];
        // Daria para melhorar essas condicionais, todas elas, usando somente o if e colocando apenas uma comparação para cada if!
        if (IMC < 18.5) {
            return niveis[0];
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            return niveis[1];
        } else if (IMC >= 25 && IMC <= 29.9) {
            return niveis[2];
        } else if (IMC >= 30 && IMC <= 34.9) {
            return niveis[3];
        } else if (IMC >= 35 && IMC <= 39.9) {
            return niveis[4];
        } else {
            return niveis[5];
        }
    };
    function confereDados(peso, altura) {
        const p = criaP();
        if (Number(peso) !== 0 && Number(altura) !== 0 && !Number.isNaN(Number(peso)) && !Number.isNaN(Number(altura))) {
            const Imc = IMC(Number(peso), Number(altura));
            // Esse classList.add, ele adiciona uma classe em uma tag.
            p.classList.add('text-success');
            p.innerHTML = msgPadrao(Imc);
            return p;
        } else {
            peso.value = '';
            altura.value = '';
            p.classList.add('text-warning');
            if ((Number.isNaN(Number(peso)) === true || Number(peso) === 0) && (Number.isNaN(Number(altura)) === true || Number(altura) === 0)) {
                p.innerHTML = 'Peso e Altura Inválido';
                return p;
            } else if (Number.isNaN(Number(peso)) === true || Number(peso) === 0) {
                p.innerHTML = 'Peso Inválido';
                return p;
            } else {
                p.innerHTML = 'Altura Inválido';
                return p;
            }
        }
    };
    function imc(evento) {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';

        evento.preventDefault();

        // Modo alternativo
        // const inputPeso = evento.target.querySelector('#peso');
        // const inputAltura = evento.target.querySelector('#altura');
        // const peso = Number(inputPeso.value);
        // const altura = Number(inputAltura.value);
        // console.log(peso, altura);

        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');

        // Add uma string ou string junto com tag como sua sub camada de div
        resultado.appendChild(confereDados(peso.value, altura.value));

        peso.value = '';
        altura.value = '';
    };
    form.addEventListener('submit', imc);
}
CalculaIMC();

