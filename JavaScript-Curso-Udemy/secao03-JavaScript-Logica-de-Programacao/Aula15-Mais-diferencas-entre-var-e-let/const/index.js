const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

let nome = 'Leonardo';
var nome2 = 'Leonardo';
var nome2 = 'Takashi';
console.log(nome, nome2);

// let nome
// var nome2

if (verdadeira) {
    let nome = 'Teramatsu';
    var nome2 = 'Teramatsu';
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Takashi';
        var nome2 = 'Outra coisa';
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);

var falaOi = 'Oi';
function FalaOi() {
    var falaOi = 'Olá';
}
console.log(falaOi);
FalaOi();
console.log(falaOi);

console.log(sobrenome);

// var sobrenome = 'Teramatsu';
let sobrenome = 'Teramatsu';
