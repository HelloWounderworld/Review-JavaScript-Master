const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

// Captura o evento da tecla 'Enter'.
inputTarefa.addEventListener('keypress', function(e) {
    // console.log(e);
    if (e.keyCode === 13) {
        // console.log('Enter pressionado');
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput () {
    inputTarefa.value = '';
    // Esse evento faz o cursor '|', que fica dentro do input, piscando
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    // console.log(textoInput);
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e) {
    // Isso serve para evitar de ficar retornando algo vazio e considerar algum retorno
    // somente quando algo for colocado dentro do input.
    if(!inputTarefa.value) return;
    // console.log(inputTarefa.value);
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    // .target te permite saber qual a classe que está sendo capturado
    const el = e.target;
    // console.log(el);
    if (el.classList.contains('apagar')) {
        // console.log('Apagar clicado');
        // console.log(el.parentElement);
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    // console.log(liTarefas);

    for (let tarefa of liTarefas) {
        // console.log(tarefa.innerText);
        let tarefaTexto = tarefa.innerText;
        // .trim() - remove o espaço sobrando
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        // console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
        // console.log(listaDeTarefas);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log(tarefasJSON);
    // No caso, só podemos salvar uma string dentro do localStorage
    // o que foi necessário converter em JSON como acima
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    // console.log(tarefas);
    // console.log(listaDeTarefas);
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
