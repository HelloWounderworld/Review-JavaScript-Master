/* 
    Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925925
    Luiz Otávio nasceu em 1980
*/
// Na frase acima, queremos que crie variáveis para nome, sobrenome, idade, peso, altura e para calcular o seu índice de massa corporal (IMC).

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc; // peso / (altura * altura)

let anoNascimento;

// Calcule o IMC e o ano de nascimento do Luiz e escreve a frase assima em console.log

imc = peso / (altura * altura);

anoNascimento = 2023 - 30;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);

// Uma outra alternativa para resolvermos esse problema seria usando a operação de concatenação, +. Mas nesse caso, vc terá que concatenar os espaços tbm " ".
console.log(nome + ' ' + sobrenome +' tem ' + idade + ' anos, pesa ' + peso + ' kg tem ' + altura + ' de altura e seu IMC é de ' + imc);
console.log(nome + ' nasceu em ' + anoNascimento);

// Outra alternativa seria usando a crase ` ` e para passar os dados das variáveis dentro dela, terá que usar o ${}.
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem altura de ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
