const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p><br/>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p><br/>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p><br/>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p><br/>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p><br/>`;
texto.innerHTML += `<p>Com duas casas decimais: ${Number(numero.toFixed(2))}</p><br/>`;
