// alert('Com a nossa mensagem.');
let num1 = Number(prompt('Digite um número:'));
let num2 = Number(prompt('Digite um número:'));

const resultado = num1 + num2;

alert(`O resultado da soma é: ${resultado}`);
alert('O resultado da soma é: ' + resultado);
alert(`O resultado da soma é: ${num1 + num2}`);
alert('O resultado da soma é: ' + num1 + num2); // Isso vai dar errado, por quê será? kkkkkk Lembra, quando vc soma uma string com um número?? Isso não vira uma soma, mas sim, uma concatenação.
alert('O resultado da soma é: ' + (num1 + num2));
// Pelo visto o alert não dá para fazer que nem o console.log, no caso separar simplesmente por vírgula.