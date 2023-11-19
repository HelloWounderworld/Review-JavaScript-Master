function clock() {
  const relogio = document.querySelector('.relogio');
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');

  function zeroEsquerda(num) {
    return num < 10 ? `0${num}` : num;
  }

  function convertCronometro(data) {
    const hora = new Date(data).getHours() - new Date(0).getHours();
    const minuto = new Date(data).getMinutes() - new Date(0).getMinutes();
    const segundo = new Date(data).getSeconds() - new Date(0).getSeconds();
    return `${zeroEsquerda(hora)}:${zeroEsquerda(minuto)}:${zeroEsquerda(segundo)}`;
  }

  function contarCronometro(tempo) {
    tempo += 1000;
    return tempo;
  }

  let tempoContar;
  let tempoZero = 0;

  // Essa é a maneira de captar o evento de click.
  iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    // Aqui é para não executar o iniciar mais de uma vez para ficar uma contagem maluca
    clearInterval(tempoContar);
    tempoContar = setInterval(function () {
      tempoZero = contarCronometro(tempoZero);
      relogio.innerText = convertCronometro(tempoZero);
    }, 1000);
  });

  pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(tempoContar);
  });

  zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    tempoZero = 0;
    clearInterval(tempoContar);
    relogio.innerText = convertCronometro(0);
  });
}
clock();
