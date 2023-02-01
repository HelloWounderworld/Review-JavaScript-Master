function meuEscopo() {
    // alert(1);
    // const form = document.querySelector('form'); // Uma alternativa de selecionar pela tag
    const form = document.querySelector('.form'); // Selecionando pela classe.
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    // form.onsubmit = function(evento) {
    //     evento.preventDefault(); // Vai evitar que a página atualize sempre que clicar no botão Enviar
    //     // Como prova disso, vc verá que o console.log abaixo não ficará somente um milésimo de segundos.
    //     // alert(1);
    //     console.log('Foi eviado.'); // Note que esse console.log vai ser exibido em milésimo de segundos
    // };

    // let contador = 1;
    function recebeEventoForm(evento) {
        evento.preventDefault();
        // console.log(`Form não foi enviado ${contador}`);
        // contador++;
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        // console.log(nome.value, sobrenome.value, peso.value, altura.value);

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
        pessoas.push(pessoa);
        console.log(pessoas);
        console.log(resultado);
        resultado.innerHTML = '';
        for(let i = 0; i < pessoas.length; i++) {
            resultado.innerHTML += `<p>${pessoas[i].nome} ${pessoas[i].sobrenome} ${pessoas[i].peso} ${pessoas[i].altura}</p>`;
        }
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();