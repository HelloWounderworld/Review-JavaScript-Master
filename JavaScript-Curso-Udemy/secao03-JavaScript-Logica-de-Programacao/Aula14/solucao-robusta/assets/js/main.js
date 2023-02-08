const h1 = document.querySelector('.container h1'); // Uma maneira de selecionar a classe e a tag, na qual contém dentro dela.
const data = new Date();
const opcoes = {
    dateStyle: "full",
    timeStyle: "short"
};

console.log(new Intl.DateTimeFormat('gregory', opcoes))
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: "full", timeStyle: "short" });
