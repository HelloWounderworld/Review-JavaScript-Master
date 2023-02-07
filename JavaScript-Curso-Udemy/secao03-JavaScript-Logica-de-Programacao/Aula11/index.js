const pontuacaoUsuario = 300;
const nivelUsuario = pontuacaoUsuario >= 200 ? 'Usuário Aprovado' : 'Usuário Reprovado';

// const corUsuario = ''; // Considera como false
// const corUsuario = ""; // O mesmo
// const corUsuario = ``; // O mesmo
// const corUsuario = 0; // O mesmo
// const corUsuario = undefined; // O mesmo
// const corUsuario = false; // O mesmo
// const corUsuario = 'Pink';
// const corUsuario = 1;
// const corUsuario = true;
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario, corPadrao);