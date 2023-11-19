const h1 = document.querySelector('.container h1'); // Uma maneira de selecionar a classe e a tag, na qual contém dentro dela.
const data = new Date();
const opcoes = {
    dateStyle: "full",
    timeStyle: "short"
};

// console.log(new Intl.DateTimeFormat('gregory', opcoes))
// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: "full", timeStyle: "short" });
h1.innerHTML = data.toLocaleDateString('pt-BR');
// Bom, não está funcionando. Então melhor dar uma lida à fundo na documentação
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Uma outra solução alternativa é se aproveitar da natureza de indexação dos dias da semana e meses, usando a lista.