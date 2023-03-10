# Seção 3 - JavaScript - Lógica de Programação:

## Aula 01 - Sobre lógica:
A lógica de programação é uma coisa complicada de se compreender de primeira. Muitas pessoas já tem facilidade com lógica, outras não. Assim como matemática ou português, humanas ou exatas, alguns terão muita facilidade, outros muita dificuldade.

Minhas dicas são:

- Se você tem facilidade em entender as aulas, ajude outros alunos. Isso fará você fixar melhor o conteúdo e entender pontos que talvez não tenha entendido tão bem como imaginava.

- Se você tem dificuldade em entender as aulas, não deixe de questionar. Eu posso ajudar com o que eu souber. Outros alunos também podem te ajudar.

## Aula 02 - Extensões que utilizo no VSCode:
São eles

- Code Runner

- Code Time

- EJS language support

- Git Graph

- Dracula Official

- Material Icon Theme

## Aula 03 - Operadores de comparação:
Vamos aprender a usar os operadores de comparação.

São eles

    > // Maior que, no sentido estrito
    >= // Maior ou igual
    < // Menor que, no sentido estrito
    <= // Menor ou igual
    == // Igualdade (só checa o valor)
    === // Igualdade estrita (checa valor e o tipo)
    != // diferente (só checa valor)
    !== // diferente estrito (checa valor e o tipo)

Obs: Em boas práticas, o recomedável, na hora de comparar a igualdade e a diferença, usar o formato que permite a comparação de tipos tbm!

## Aula 04 - Operadores Lógicos:
Vamos aprender a usar os operadores Lógicos de JavaScript.

São eles

    && -> AND
    || -> OR
    ! -> NOT

Bom, aqui não tenho tanto segredo, pois quem sabe lógica proposicional (Teoria dos Conjuntos Básico) não tem tanta dificuldade de conseguir utilizar tais operadores acima. Ou seja, a lógica são exatamente as mesmas.

Obs: Podemos usar a negação, !, duas vezes o quantas vezes finitos de forma iterada. No ponto de vista de lógica proposicional, isso significa complemento do complemento do complemento, etc... E conforme a quantidade fica alternando entre true e false.

## Aula 05 - Avaliação de Curto-Circuito (Short-Circuit):
Vamos aprender sobre a avaliação de curto-circuito.

No caso, aprendemos sobre os operadores lógicos, na última aula.

Vamos vasculhar mais algumas funcionalidades delas

    console.log('Leonardo Takashi Teramatsu' && true && 'Leo');

Nessa situação, o que será retornado? 

No caso, o que quero dizer aqui, seria que em um processo de avaliar uma intersecção de valores, no caso o operador AND, ele retorna o último valor desse conjunto, realizando a leitura de esquerda para direita, no ponto de vista computacional. No caso, no esquema acima, será devolvido o 'Leo' ao rodarmos o código acima. Mas se tivermos um false no meio do caminho, será impedido e retornará o valor false, como abaixo

    console.log('Leonardo Takashi Teramatsu' && false && 'Leo');

Ou seja, isso prova que a leitura está acontecendo de esquerda para direita os valores booleanos.

Além disso, temos tbm valores que são definidos como false por princípio. São eles

    0
    '' "" ``
    null
    undefined
    NaN

No caso, acima, pelo fato de o valor indicar algo que não tem valor (irônico, né? kkkkk), por baixo dos panos, eles tem valores booleanos false, mas ao rodarmos no código, não será retornado um booleano, mas, sim, assim como foi visto para valores true, os valores primitivos acima

    console.log('' && true && 'Leo');
    console.log(true && '' && 'Leo');
    console.log("" && true && 'Leo');
    console.log(`` && true && 'Leo');
    console.log(0 && true && 'Leo');
    console.log(true && 0 && 'Leo');
    console.log(null && true && 'Leo');
    console.log(true && null && 'Leo');
    console.log(undefined && true && 'Leo');
    console.log(true && undefined && 'Leo');
    console.log(NaN && true && 'Leo');
    console.log(true && NaN && 'Leo');

Note que, acontece o mesmo efeito quando colocamos diretamente o false, visto que a leitura é de esquerda para a direita. Tais valores, donde por de baixo dos panos é considerado false, é devolvido o próprio valor em sí.

Obs: Em JavaScript, tudo pode ser avaliado em true ou false.

No caso, entendido a natureza do AND acima, o que seria um curto-circuito nesse processo? Seria o seguinte

    function falaOi() {
        return 'Oi';
    }

    const vaiExecutar = false;

    vaiExecutar && console.log(falaOi());

O exemplo acima, é algo totalmente válido para o JavaScritp rodar no terminal. Daí, note que, ao rodarmos o código acima, não será retornado, absolutamente, nada, visto que, antes mesmo de executar o console.log(falaOi()), irá parar antes pois a variável vaiExecutar, está como false.

    function falaOi() {
        return 'Oi';
    }

    const vaiExecutar = false;
    const vaiExecutar1 = true;

    vaiExecutar && console.log(falaOi());
    vaiExecutar1 && console.log(falaOi());

Mas, note que, mesmo não executando nada, as linhas posteriores ainda serão lidas. Além disso, a segunda setença lógia, como está correta, ou seja, todos são true, então será mostrado a msg 'Oi' pelo terminal.

    let vaiExecutar;
    
    console.log(vaiExecutar && falaOi());

Na situação acima, visto que vc compreendeu bem as definições dos valores que já são false por de baixo dos panos, o que será que irá devolver acima?

    let vaiExecutar;
    let vaiExecutar1 = 'Leonardo';

    console.log(vaiExecutar && falaOi());
    console.log(vaiExecutar1 && falaOi());

Já a circunstância abaixo, mostrará a msg 'Oi', visto que a string não está vazia e a variável definida, vaiExecutar1.

Agora, se tivermos o seguinte

    console.log('Leonardo Takashi Teramatsu' || true || 'Leo');
    console.log('Leonardo Takashi Teramatsu' || false || 'Leo');

O que será que o código acima irá devolver no terminal?

No caso, em ambos os casos, será devolvido 'Leonardo Takashi Teramatsu', pois estamos usando o operador lógico de OR, que indica união de conjuntos. Percebe-se que podemos trocar cada parâmetro acima que será o mesmo, a resposta

    console.log( false || 'Leonardo Takashi Teramatsu' || 'Leo');
    console.log( false || 'Leo' || 'Leonardo Takashi Teramatsu');

Ou seja, basicamente, o operador OR, visto que a leitura computacional é de esquerda para direita, então ele irá retornar o primeiro valor verdadeiro que foi encontrado. No caso, esse operador só devolverá um valor false ou um valor que por baixo dos panos é false, somente todas as sentenças lógicas forem falsas e o valor falso que será devolvido será o último valor false.

    console.log( false || false || '');
    console.log( false || false || null);
    console.log( 0 || "" || null);

## Aula 06 - if, else if e else (1):
Vamos revisar, agora, os operadores if, else if e else.

Bom, podemos entender que o if, else if e else, no ponto de vista matemático, de possibilidades que temos, não, exatamente, no sentido probabilístico, mas do que conseguimos contar. Do ponto de vista de lógica proposicional, seria a união de conjuntos que perte contar tais possibilidades.

No caso, os operadores if, else if e else, eles avaliam se uma dada condição é ou não verdadeira para possibilitar que algo seja executado.

Do ponto de vista matemático, podemos entender isso como uma implicação. Ou seja, o pensamento matemático daria para se resumir no entendimento da causa e consequência, em outras palavras, se uma dada hipótese estiver satisfeita, então resulta em uma certa tese

    Hipótese => Tese
    (=>) - Implica

Mas, vamos tomar um pouco de cuidado com essa analogia, pois ela tem uma lixeira diferença entre a computação.

Enquanto que na matemática a implicação, ou seja, se algo satisfazer, então (implica) na tese, ela tem todo um argumento consistente que faz com que necessariamente conseguimos concluir um resultado visto que certas condições são satisfeitas, em computação essa implicação ela é pode ser definida de forma manual, independente se faz ou não sentido.

Um exemplo, seria o seguinte raciocínio:

- Raciocínio matemático:

    Dado um número inteiro n. Logo:
    Se n divisível por 2 => n é par

- Computação:

    Dado uma variável palavra. Logo:
    palavra === 'Maçã' => tenho uma 'Laranja'

Note que, enquanto que no raciocínio matemático, não importa qual seja o número inteiro, se ele for divisível por 2, então necessariamente ele é par, e não podemos dizer que ele é qualquer outra coisa, pois tem um sentido que satisfeito a condição necessariamente conseguimos concluir isso em teoria? Sendo que em computação, visto que uma condição seja satisfeita, o que será resultado dela temos a flexibilidade de definir o que quisermos, visto que acima resultou em 'Laranja', mas o que 'Laranja' tem haver com a 'Maçã'? Não tem nenhum relação.

Entretanto, é importante ressaltar que esse raciocínio matemático de hipótese => Tese, é importante caso quisermos construir um código bem mais robusto para resolver problemas bem complexos, pois além de condicionais if, else if e else que vamos estudar aqui na aula existem conceitos de classes que vai nos ajudar a construir todo um código donde podemos configurar tais raciocínios, mesmo que o código em si, ele não diga o motivo por baixo da teoria do por quê que se isso acontecer faz sentido resultar em algo.

Vamos praticar via um exemplo

    const hora = 50;

    if(0 < hora && hora <= 12) {
        console.log('Bom dia!');
    } else if (12 < hora && hora <=17) {
        console.log('Boa tarde!');
    } else if (17 < hora && hora <= 23) {
        console.log('Boa noite!');
    } else {
        console.log('Olá!');
    }

Sempre que formos usar o else if ou else, precisamos da presença do if.

Visto que o if está presente, podemos usar quantos else if quisermos.

Só podemos usar somente um else.

Podemos utilizar tbm somente if e else, visto que as possibilidades se dividem em apenas dois caminhos.

Alguns macetes de avaliar as condições

    const tenhoGrana = true;

    if(tenhoGrana) {
        console.log('Vou sair de casa');
    } else {
        console.log('Não vou sair de casa');
    }

Podemos usar a mesma lógica que aprendemos quando estavamos estudando os operadores lógicos && e ||. Ou seja, no lugar de conferir uma condição true, acima, podemos colocar outros dados, que por baixo dos panos eles são true ou false, do que havíamos aprendido na aula 05.

## Aula 07 - if, else if e else (2):
Vamos continuar falando dos operadores condicionais.

Vejamos a seguinte lógica

    const numero = 10;

    if (numero >= 0 && numero <=5) {
        console.log('Sim, o número é maior ou igual a zero.');
        console.log('Seu núemro está entre 0 e 5.');
    } else {
        console.log('O número NÃO está entre 0 e 5.');
    }

Note que, a condição acima estamos usando o else. Mas, agora, se fizermos o seguinte

    const numero = 5;

    if (numero >= 0 && numero <=5) {
        console.log('Sim, o número é maior ou igual a zero.');
        console.log('Seu núemro está entre 0 e 5.');
    }
        
    console.log('O número NÃO está entre 0 e 5.');

O que vc acha que será devolvido?

Será devolvido tanto os dois consoles que estão dentro do if, visto que estão satisfeitos as condições, quanto o console.log que está fora do if. Ou seja, percebe que mesmo satisfeito a condição o JavaScript vai continuar lendo as linhas de código posteriores? 

Existem situações em que isso acaba sendo problemático, pois queremos que a execução pare, visto que ela satisfez uma dada condição, sem que execute outras ações posteriores, mesmo que estejam definidas.

Para isso, vamos ter que usar o return, pois ela irá fazer parar a execução exatamente naquela linhaem que vc pediu para ter esse retorno.

    const numero = 5;

    if (numero >= 0 && numero <=5) {
        console.log('Sim, o número é maior ou igual a zero.');
        console.log('Seu núemro está entre 0 e 5.');
        return;
    }
        
    console.log('O número NÃO está entre 0 e 5.');

Ou, se queremos que não somente mostre os valores visto que satifeitas as condições, queremos que o código continua rodando realizando a leitura das linhas à frente, então, em vez de usarmos o return, podemos definir o else e tudo estará funcionando corretamente.

    if (numero >= 0 && numero <=5) {
        console.log('Sim, o número é maior ou igual a zero.');
        console.log('Seu núemro está entre 0 e 5.');
    } else {
        console.log('O número NÃO está entre 0 e 5.');
    }

Obs: A leitura das condicionais são feitas de cima para baixo. No caso, em cenários em que tivemos bastante else if, por conta da leitura de cima para baixo, será executado o contéudo da primeira condicional que for satisfeita nesse processo. Logo, não importa se tiver outras condicionais adiante que seja verdadeira, que bastando encontrar a primeira condicional verdadeira ela será executada e todas as condicionais adiantes não serão mais. 

Por isso, como uma forma de boa prática, seria legal exercer bastante a sua capacidade de lógica proposicional, pois tais problemas seriam resolvidos, muitas vezes, sabendo criar algumas condicionais mais robustas para evitar tais problemas que pode, como consequência, trazer outros problemas. Ou, até mesmo, uma outra forma de resolver esse tipo de problema é saber separar o conjunto if, else if e else com um outro conjunto if, else if e else. Ou seja, em vez de tentar colocar todas as condicionais dentro de um único conjunto if, else if e else, criar dois ou três, ou até mais, conjuntos para evitar que esse problema aconteça.

## Aula 08 - Modelo HTML e CSS para exercícios posteriores:
Dixei baixado o modelo.zip que será o modelo para essa seção de exercícios.

## Aula 09 - Nota sobre o próximo exercício:
A próxima aula será um exercício onde vamos aplicar todo o conhecimento aprendido até aqui, porém, pode ser um tanto intimidador para iniciantes unir todo o conhecimento em uma única aula.

Se você se sentir preso(a) em algum momento ao realizar o exercício, minha sugestão é que você siga digitando comigo enquanto crio a minha solução.

Ainda temos muitas aulas para fixar muito mais todo o seu conhecimento.

## Aula 10 - Exercício (unindo tudo aprendido até aqui e mais):
Bora começar fazendo o exercício!

Considere esse exercício como um EP, como é dado nas faculdades que ensinam algum curso de programação.

Basicamente, o objetivo desse exercício é criar o mesmo template dinâmico do diretorio, solucao-do-prof, mas fazendo da sua forma de maneira mais eficiente e possível.

Nesse exercício, queremos que vc use as functions, operadores condicionais, operadores lógicos, recursos que temos para números, listas, etc... Ou seja, tudo o que vimos até agora.

Libere contudo a sua criatividade nesse exercício!

## Aula 11 - Operação ternária:
Vamos, agora, revisar sobre operadores ternários.

Baicamente, a operação ternária é um if e else de forma bem resumida, visto que tal condição nos fornece somente dois tipos de possibilidades.

Basicamente a estrutura que temos para operação ternário seria o seguinte

    condicao ? true : false

Ou seja, em "condicao" vc coloca alguma condição para verificar e, em seguida, no será retornado o valor que vc definir no true, caso ele for verdadeiro, ou será retornardo um valor que vc definir, caso for falso.

Um exemplo de sua aplicação seria o seguinte

    const pontuacaoUsuario = 300;
    const nivelUsuario = pontuacaoUsuario >= 200 ? 'Usuário Aprovado' : 'Usuário Reprovado';
    console.log(nivelUsuario);

No caso, a operação ternária, seria bom quando vc usa em momentos em que, de fato, as possibilidades são somente duas e que vc queira economizar espaço para código.

Tem um outro macete bem legal que é o fallback, onde vc seta um valor padrão para a variável, como seguinte

    const pontuacaoUsuario = 300;
    const nivelUsuario = pontuacaoUsuario >= 200 ? 'Usuário Aprovado' : 'Usuário Reprovado';

    const corUsuario = null;
    const corPadrao = corUsuario || 'Preta';
    console.log(nivelUsuario, corPadrao);

Basicamente, o fallback está sendo aplicado na variável corPadrao. No caso, o que está sendo dito seria "Se o corUsuario for null, então define como cor padrão 'Preta'".

Tenta mudar, agora, a variável corUsuario colocando algum valor válido dentro dele, 'Pink', por exemplo.

Temos, tbm, outras alternativas que nos dão o mesmo resultado ou resultados diferentes

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

Bom, isso é o fallback.

## Aula 12 - Objeto Date:
Vamos revisar sobre Objeto Date.

A função date é uma função construtora. Sempre que vc usa alguma função construtora, a sintaxe utilizada é o "new", como vemos ver para a função date aqui

    const data = new Date();

E lembrando que sempre que utilizamos alguma função construtora, todas elas começam com uma letra maíscula em seu nome.

    const data = new Date();
    console.log(data.toString());

Aqui estou utilizando os métodos que essa função construtora tem.

A função construtora, Date, ela tem uma imensa quantidade de métodos, donde abordar todas elas custaria um curso inteiro. Logo, deixarei o link onde tem todas as funcionalidades dessa função construtora

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

Nessa aula, vamos abordar somente aquelas que são mais usuais no dia a dia de um dev.

Bom, no código em que usamos o método ".toString()", nela está sendo mostrado a data atual em inglês. Mas aí vem a pergunta. Ela faz referência de qual data início? A partir de qual início de data ela faz a contagem para exibir as datas atuais?

A resposta é a data inicial, na qual ela faz referência, é na criação do sistema operacional Linux, 01/01/1970

    // const data = new Date();
    const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix
    console.log(data.toString());

Claro, ao rodarmos o código acima, será exibido

    Wed Dec 31 1969 21:00:00 GMT-0300 (Hora padrão de Brasília)

Visto que moramos em BR. Mas, note que, o horário da contagem está em GMT-0300, ou seja, ela subtrai 3h da data de inicío, que é a característica do tempo GMT.

No caso, se vc quiser corrigir isso, dentro do Date(0) terá que ser somado essa quantidade de horas. E Lembrando que dentro dela o tempo que é considerado é milisegundos. Então, se vc quiser somar 3 horas dentro desse Date(0) será necessário converter esse 3 horas em millisegundos para depois somar

    // const data = new Date();
    const tresHoras = 60 * 60 * 3 * 1000;
    const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
    console.log(data.toString());

Feito isso, será exibido a seguinte informação no terminal

    Thu Jan 01 1970 00:00:00 GMT-0300 (Hora padrão de Brasília)

O mesmo vale caso vc quiser que seja exibida a informação de 24 horas após

    // const data = new Date();
    const tresHoras = 60 * 60 * 3 * 1000;
    const umDia = 60 * 60 * 24 * 1000;
    const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
    console.log(data.toString());

Donde será exibido a seguinte informação

    Fri Jan 02 1970 00:00:00 GMT-0300 (Hora padrão de Brasília)

Um outro modo de conseguirmos exibirmos a data é colocando literalmente o seginte

    new Date(Ano, mês, Dia, Hora, Minutos, segundo, milésimo de segundos)

Donde, no mês, vc não coloca um 0 à esquerda, como 03, 01, etc... Além disso, o mês ele é contado a partir do zero, ou seja, 0, 1, 2, ...., 10, 11 é, respectivamente, Janeiro, Fevereiro, Março, ..., Novembro, Dezembro

    const data = new Date(2023, 1, 7, 15, 46, 50, 5000);
    console.log(data.toString());

Isso exibirá a informação pelo terminal

    Tue Feb 07 2023 15:46:55 GMT-0300 (Hora padrão de Brasília)

Lembrando que a contagem de milésimo de segundos é de mil a mil. Ou seja

    1 Segundos <=> 1000 milisegundos

Logo, se vc colocar algo do tipo

    const data = new Date(2023, 1, 7, 15, 46, 50, 1000);
    console.log(data.toString());

Em vez de ser exibido um segundo de 50, ele será acrescentado para 51 segundos na informação que será exibida.

De maneira análoga serve para outras casas de tempo. Se vc colocar 60 segundos, na casa de segundos, automaticamente será contado como 1 minuto, da mesma forma para minuto para hora e de hora para dia e dia para ano. Ou até mesmo, nessa relação de equivalência, se vc colocar na casa de segundos um número que equivale à anos, será convertido diretamente para o ano.

Agora, se omitirmos os milisegundos, segundos, minutos, hora e dia, esses valores serão estabelecidos, por padrão, como horário 0

    // const data = new Date(2023, 1, 7, 15, 46, 50, 5000);
    // const data = new Date(2023, 1, 7, 15, 46, 50);
    // const data = new Date(2023, 1, 7, 15, 46);
    // const data = new Date(2023, 1, 7, 15);
    // const data = new Date(2023, 1, 7);
    const data = new Date(2023, 1);
    console.log(data.toString());

Só nã vou poder omitir o mês, pois se emitirmos o mês, o valor que está dentro passará a ser considerado como milisegundos. No caso, precisa-se, no mínimo, de dois parâmetros.

Uma outra forma usual que podemos mandar um dado dentro da função construtora, Date, é a data em forma de string

    const data = new Date('2023-02-07');
    console.log(data.toString());

Podemos colocar até o horário tbm junto com a data

    const data = new Date('2023-02-07 15:57:40');
    console.log(data.toString());

Mas, em ambos os casos será exibido a data em formato GMT.

Podemos tbm passar até milissegundos e tbm o formato T, esta última não mudará nada

    const data = new Date('2023-02-07T15:57:40.500');
    console.log(data.toString());

Para obtermos o número do dia, vamos usar o getDate

    const data = new Date('2023-02-07T15:57:40.500');
    console.log(data.toString());
    console.log('Dia', data.getDate());

No caso, será retornado dia 7 no terminal acima. O mesmo valerá para mês, ano, hora, minutos, segundos e milissegundos

    const data = new Date('2023-02-07T15:57:40.500');
    console.log(data.toString());
    console.log('Dia', data.getDate());
    console.log('Mês', data.getMonth() + 1);
    console.log('Ano', data.getFullYear());
    console.log('Hora', data.getHours());
    console.log('Minuto', data.getMinutes());
    console.log('Segundo', data.getSeconds());
    console.log('Milissegundo', data.getMilliseconds());
    console.log('Dia da semana', data.getDay());

Um detalhe importante aqui tbm é que o dia da semana é contado da seguinte forma

    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado

Bom, vimos que a função Date, por ser construtora ela usa o new para conseguirmos realizar as aplicações. Mas existem casos em que podemos usar o Date sem usar o new

    console.log(Date.now());

Isso mostrará a data de agora em milissegundos

    console.log(Date.now());
    console.log(new Date(Date.now()));

Como podemos ver pelo segundo console.

No caso, visto as usabilidades da função Date, podemos realizar algumas personalizações acima disso

    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
    }

    function formataData(data) {
        const dia = zeroAEsquerda(data.getDate());
        const mes = zeroAEsquerda(data.getMonth() + 1);
        const ano = zeroAEsquerda(data.getFullYear());
        const hora = zeroAEsquerda(data.getHours());
        const min = zeroAEsquerda(data.getMinutes());
        const seg = zeroAEsquerda(data.getSeconds());

        return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
    }

    const data = new Date();
    const dataBrasil = formataData(data);
    console.log(dataBrasil);

No caso, o código acima, nos permite exibir o horário de agora em formato brasileiro.

## Aula 13 - Switch/Case:
Vamos falar sobre a estrutura condicional Switch/Case.

Vamos começar o seguinte

    const data = new Date();
    const diaSemana = data.getDay();
    let diaSemanaTexto;

    if (diaSemana === 0) {
        diaSemanaTexto = 'Domingo';
    } else if (diaSemana === 1) {
        diaSemanaTexto = 'Segunda';
    } else if (diaSemana === 2) {
        diaSemanaTexto = 'Terça';
    } else if (diaSemana === 3) {
        diaSemanaTexto = 'Quarta';
    } else if (diaSemana === 4) {
        diaSemanaTexto = 'Quinta';
    } else if (diaSemana === 5) {
        diaSemanaTexto = 'Sexta';
    } else if (diaSemana === 6) {
        diaSemanaTexto = 'Sábado';
    } else {
        diaSemanaTexto = '';
    }

    console.log(diaSemana, diaSemanaTexto);

O código acima, ele confere qual dia da semana é pelo número padronizado da função Date e perante à esse número ele retorna o dia da semana correspondente. Nesse tipo de situação, vimos que usamos o if e else if para podermos codificar isso. Claro, a lógica não está errada e a forma como foi feita acima ela funciona.

Entretanto, seria menos trabalhoso, nesses casos, usarmos o Switch/Case. Ou seja, o Switch/Case ele é um conjunto de condicionais que ajuda a tornar menos custoso as linhas para codar.

Logo, com o uso do Switch ficaria da seguinte forma

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;

        case 1: 
            diaSemanaTexto = 'Segunda';
            break;

        case 2:
            diaSemanaTexto = 'Terça';
            break;

        case 3:
            diaSemanaTexto = 'Quarta';
            break;

        case 4: 
            diaSemanaTexto = 'Quinta';
            break;
        
        case 5:
            diaSemanaTexto = 'Sexta';
            break;

        case 6:
            diaSemanaTexto = 'Sábado';
            break;
    }

    console.log(diaSemana, diaSemanaTexto);

Basicamente, a sintaxe do switch/case é o seguinte

    switch(A variável que vc quer checar) {
        case Se a variável for esse valor:
            Execute o comando desse bloco;
            break; Sai fora depois disso.
    }

O break nesse switch é necessário, pois se vc não usar o break, ele continuará avaliando outras possibilidades. Ou seja, esses cases que aparecem, em vez de ser como if, else if e else, eles são um conjunto de if's. Donde, se vc não dar um break para sair, assim como vc escreve if, if, if ... Para cada linha e será lido, será feito para o case tbm. Temos tbm uma espécie de else, para o switch/case, que é o default

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;

        case 1: 
            diaSemanaTexto = 'Segunda';
            break;

        case 2:
            diaSemanaTexto = 'Terça';
            break;

        case 3:
            diaSemanaTexto = 'Quarta';
            break;

        case 4: 
            diaSemanaTexto = 'Quinta';
            break;
        
        case 5:
            diaSemanaTexto = 'Sexta';
            break;

        case 6:
            diaSemanaTexto = 'Sábado';
            break;

        default:
            diaSemanaTexto = '';
            break; // break no default é opcional.
    }

Ou seja, funciona da seguinte forma, se nenhuma das condições acima não for válido, então faça isso.

Lembrando que a palavra chave, break, não é uma palavra chave apenas do switch. Ou seja, ela é independente, donde pode ser usado em outras estruturas de repetições.

Podemos colocar o switch dentro de uma função e nesses casos não será necessário usar o break

    function getDayOfWeek (dayOfWeek) {
        let diaSemanaTexto;
        switch (dayOfWeek) {
            case 0:
                diaSemanaTexto = 'Domingo';
                return diaSemanaTexto;
        
            case 1: 
                diaSemanaTexto = 'Segunda';
                return diaSemanaTexto;
        
            case 2:
                diaSemanaTexto = 'Terça';
                return diaSemanaTexto;
        
            case 3:
                diaSemanaTexto = 'Quarta';
                return diaSemanaTexto;
        
            case 4: 
                diaSemanaTexto = 'Quinta';
                return diaSemanaTexto;
            
            case 5:
                diaSemanaTexto = 'Sexta';
                return diaSemanaTexto;
        
            case 6:
                diaSemanaTexto = 'Sábado';
                return diaSemanaTexto;
        
            default:
                diaSemanaTexto = '';
                return diaSemanaTexto; // break no default é opcional.
        }
    }

    // console.log(diaSemana, diaSemanaTexto);
    console.log(diaSemana, getDayOfWeek(diaSemana));

Note que, nesse código acima, no lugar do break, está sendo usado o return, pois como está dentro do escopo da função, não tem risco de usar o return e acabar não executando mais os códigos posteriores. Além disso, a variável, diaSemanaTexto, lembrando de como funciona o escopo, fora da função, é considerada inexistente, o que não corre o risco de definirmos o mesmo nome de variável fora da função.

## Aula 14 - Exercício com switch e date:
Vamos exercer sobre o conceito de switch e date que aprendemos.

Para isso, vamos precisar de um index.html e o diretório assets. Dentro do diretório assets vamos ter três diretório, uma de css, img e js. No diretório css vamos criar um arquivo style.css e no js, main.js.

O layout desses arquivos podem ser o mesmo do que usamos na aula10, donde fizemos o exercício geral de tudo.

No caso, o objetivo é criar um template que mostra a data do momento.

## Aula 15 - Mais diferenças entre var e let/const:
Vamos entender mais sobre as diferenças entre var e let/const.

A primeira diferença que a gente viu seria sobre a não possibilidade de redeclarar uma variável já declarada, que temos no let

    let nome = 'Leonardo';
    var nome2 = 'Leonardo';

    // let nome
    // var nome2

Agora, uma outra diferença seria o seguinte

    const verdadeira = true;

    let nome = 'Leonardo';
    var nome2 = 'Leonardo';

    // let nome
    // var nome2

    if (verdadeira) {
        let nome = 'Teramatsu';
        console.log(nome, nome2);
    }

Lembra que para let não poderíamos redeclarar o mesmo nome de uma variável já declarada? Bom, o que o cenário acima está indicando?

A resposta disso é está no fato de como funciona o escopo do let. Ou seja, o let ele tem um escopo de bloco. Em outras palavras, tudo que estiver dentro de chaves "{}", em JavaScript, ele é considerado um bloco. Já o var, o escopo dele é de função.

No caso, a ideia do let ter um escopo de bloco, ele serve tbm para um bloco aninhado tbm, no caso um bloco dentro de um outro bloco.

    const verdadeira = true;

    // let tem escopo de bloco { ... bloco }
    // var só tem escopo de função

    let nome = 'Leonardo';
    var nome2 = 'Leonardo';

    // let nome
    // var nome2

    if (verdadeira) {
        let nome = 'Teramatsu';
        console.log(nome, nome2);

        if (verdadeira) {
            let nome = 'Outra coisa';
            console.log(nome, nome2);
        }
    }

Daí, por conta dessa natureza do let, conseguimos ter os níveis de prioridade do que considerar no valor que foi atribuído para a variável let. Ou seja, em relação ao let denotado como nome, no código acima, ele vai escalando do bloco mais interno que estiver para fora, essa é a ordem de prioridade

    const verdadeira = true;

    // let tem escopo de bloco { ... bloco }
    // var só tem escopo de função

    let nome = 'Leonardo';
    var nome2 = 'Leonardo';

    // let nome
    // var nome2

    if (verdadeira) {
        let nome = 'Teramatsu';
        console.log(nome, nome2);

        if (verdadeira) {
            // let nome = 'Outra coisa';
            console.log(nome, nome2);
        }
    }

Como podemos ver aqui, agora que o let nome que está no bloco aninhado está comentado, então o console.log dentro desse bloco aninhado vai considerar o valor atribuído ao nome, do próximo escopo de bloco maior, que é o primeiro bloco if que foi criado

    const verdadeira = true;

    // let tem escopo de bloco { ... bloco }
    // var só tem escopo de função

    let nome = 'Leonardo';
    var nome2 = 'Leonardo';

    // let nome
    // var nome2

    if (verdadeira) {
        // let nome = 'Teramatsu';
        console.log(nome, nome2);

        if (verdadeira) {
            // let nome = 'Outra coisa';
            console.log(nome, nome2);
        }
    }

Analogamente, com a ideia acima, visto que agora o let nome do primeiro bloco if está comentado, agora qual valor do nome os dois console.logs vão considerar? No caso, seria o bloco o nível de escopo antecessor, nesse caso, agora é o que está fora do bloco, o let nome = 'Leonardo'.

No caso, visto que a variável nome está definido usando o let, sabemos que o let ele considera o escopo pelo bloco. Daí, os seus níveis são considerados começando daquela com o nível mais interno como a primeira prioridade e a ordem vai em direção para os escopos de níveis cada vez mais externo.

Visto essa funcionalidade da variável let, agora, vamos ver para a variável var. Ou seja, vemos que para a variável var o escopo dela é pela função. Antes de vermos mais à fundo disso, vamos repetir a mesma coisa que fizemos para a variável let para a var, para realizar um experimento

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
        var nome2 = 'Teramatsu';
        console.log(nome, nome2);

        if (verdadeira) {
            var nome2 = 'Outra coisa';
            console.log(nome, nome2);
        }
    }

Note que, ao rodarmos o código acima donde o var nome2 é redeclarada várias vezes, vemos que o var nome2 pode ser redeclarada no mesmo nível de escopo dela mesma e, em seguida, nos outros escopos mais internos ela foi sendo redeclarada várias vezes e o console.log captou direitinho cada redeclaração dessa variável, var nome2.

Mas, agora, vamos ver o seguinte experimento. Se chamarmos o console.log depois desse bloco, o que será retornado?

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

Note que, ao rodarmos o código, esse último console.log que está fora do bloco é retornado nela o seguinte

    Leonardo Outra Coisa

Ou seja, significa que mesmo o let sendo redeclarado com outros valores atribuídos nela cada vez que entra no escopo bloco interno, quando chamamos a variável let nome fora desses escopos internos é retornado o valor atribuído para o let nome naquele escopo em que ela está, neste caso o let nome = 'Leonardo'. Diferentemente da variável var, que o console.log retornou foi o último valor atribuído nela na redeclaração dessa variável, var nome2, independentemente de qual nível de escopo de bloco que elafoi redeclarada.

Obs: Agora, tenta comentar o let nome = 'Leonardo', que está declarada no maior nível de escopo e tenta rodar o código para ver o que será devolvido pelo último console.log? Creio que isso ajudará a entender melhor a ideia do escopo de bloco para let.

No caso, entendendo melhor a ideia do escopo de função da variável var, é que essa variável usa-se os níveis de escopo para função

    var falaOi = 'Oi';
    function FalaOi() {
        var falaOi = 'Olá';
        console.log(falaOi);
    }
    FalaOi();

No caso, a variável var falaOi acima ela está sendo declarada duas vezes, uma fora do escopo da função e outra dentro. No caso, será retornado o 'Olá'. Mas agora, se tentarmos realizar o seguinte

    var falaOi = 'Oi';
    function FalaOi() {
        var falaOi = 'Olá';
    }
    console.log(falaOi);
    FalaOi();

Nessa situação, visto que o escopo da variável var é pela função, então o valor do var falaOi que será retornado será o 'Oi' e isso mesmo que chamamos o console.log depois da função FalaOi executada

    var falaOi = 'Oi';
    function FalaOi() {
        var falaOi = 'Olá';
    }
    console.log(falaOi);
    FalaOi();
    console.log(falaOi);

Em dois console.logs será retornado o valor 'Oi' que foi definido no início. No caso, se comentarmos o var falaOi que foi definido fora do escopo da função FalaOi e tentarmos executar novamente o código dará um erro, pois o único lugar onde o var falaOi foi declarado será dentro da função FalaOi, donde quando chamado fora desse escopo será considerado inexistente.

Agora, o último conceito que quero abordar aqui seria os momentos em que as variáveis são declaradas. Vejamos o seguinte cenário

    console.log(sobrenome);

    var sobrenome = 'Teramatsu';

O que vc acha que será devolvido nessa situação?

A resposta é que ela será retornado um undefined. Diferentemente de se comentarmos a variável sobrenome e deixar só o console.log(sobrenome) rodando, que será retornado um erro. Esse é um caso muito típico para as variáveis var e quando declaramos uma função depois que damos o console.log.

Bom, basicamente, a situação acima que está acontecendo é que, quando ocorre a leitura do código o que está acontecendo é que o leitor está levando todas as variáveis var no início da linha para depois possibilitar a chamada da mesma. Ou seja, o código acima ela é exatamente o mesmo que o seguinte quando ocorre a leitura 

    var sobrenome;

    console.log(sobrenome);

    sobrenome = 'Teramatsu';

Esse fenômeno é conhecido como roisting. Algo que, por exemplo, para a variável let não acontece

    console.log(sobrenome);

    // var sobrenome = 'Teramatsu';
    let sobrenome = 'Teramatsu';

Nesse caso, será retornado um erro.

## Aula 16 - Atribuição via desestruturação (Arrays):
Vamos ver sobre atribuição via desestruturação (destructuring assignment) em arrays.

Lembra quando fizemos um exercício em que tínhamos as seguintes variáveis definidas

    let a = 'A';
    let b = 'B';
    let c = 'C';

E o objetivo desse exercício era vc alternar entre de "a => 'C'", " b => 'A'" e "c => 'B'" em um código mais enxuto possível. Bom, com os recursos que eu tive e dos que eu não sabia eu quase consegui fazer um código que pudesse resolver o exercício em uma única tacada

    a, b, c = c, a, b

No caso, a linha de pensamento acima está certo, exceto uma única coisa que era necessário para que o raciocínio acima se consolidasse em JavaScript

    [a, b, c] = [c, a, b]

No caso, acima seria a forma completa.

Basicamente, a forma acima foi exatamente um exemplo de aplicação via desestruturação do array.

No caso, a definição seria uma expressão de JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Um outro exemplo que retrata bem isso

    // const numeros = [1, 2, 3];
    const letras = [c, a, b];
    [a, b, c] = letras;

    console.log(a, b, c);

Uma outra forma mais sofisticada de aplicar atribuição via desestruturação

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const primeiroNumero = numeros[0];
    const [primeiroNumero, segundoNumero] = numeros;
    const [FirstNumber, ...SecondNumber] = numeros;

    console.log(numeros);
    console.log(primeiroNumero, segundoNumero);
    console.log(FirstNumber, SecondNumber);

Nesse exemplo de cima usamos o "...". Basicamente, ela tem as seguintes funcionalidades, uma como foi visto acima, pegando o resto (rest) da lista das que não foi pego e a outra maneira de uso seria para espalhar/distribuir algo, que é conhecido como spread.

Podemos, também, nessa brincadeira selecionar os tipos de elementos que queremos atribuir nas variáveis que estamos definindo tbm

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const primeiroNumero = numeros[0];
    const [primeiroNumero, segundoNumero] = numeros;
    const [FirstNumber, ...SecondNumber] = numeros;
    const [um, , tres, , cinco, , sete] = numeros;

    console.log(numeros);
    console.log(primeiroNumero, segundoNumero);
    console.log(FirstNumber, SecondNumber);
    console.log(um, tres, cinco, sete);

Agora, uma outra forma mais complexa de fazer atribuição via desestruturação seria o seguinte

    const numbers = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const [, [, , seis]] = numbers;
    console.log(numbers[1][2]);
    console.log(seis);

Basicamente, o conceito acima é de matriz. E para realizar uma atribuição por desestruturação de um certo elemento, 6, por exemplo, vamos precisar realizar o seguinte, primeiro pular uma linha, em seguida pular duas colunas e depois definir a variável seis.

Confesso que esse modo de atribuição via desestruturação é complicado e chato de manusear.

## Aula 17 - Atribuição via desestruturação (Objetos):
Vamos ver, agora, a atribuição via desestruturação (destruturing assignment) para objetos, {}.

    https://www.freecodecamp.org/portuguese/news/como-usar-a-desestruturacao-de-arrays-e-objetos-em-javascript/#:~:text=A%20atribui%C3%A7%C3%A3o%20de%20desestrutura%C3%A7%C3%A3o%20%C3%A9,e%20atribu%C3%AD%2Dlos%20%C3%A0s%20vari%C3%A1veis.

Basicamente, a aplicação é análogo com o que foi visto no array

    const pessoa = {
        nome: 'Leonardo',
        sobrenome: 'Teramatsu',
        idade: 26,
        endereco: {
            rua: 'Av. Brasil',
            numero: 320
        }
    };

    const { nome, sobrenome, idade } = pessoa;
    console.log(nome, sobrenome, idade);

Mas se por acaso não existir o elemento nome dentro do objeto? Nessa brincadeira, podemos definir uma

    const person = {
        lasName: 'Teramatsu',
        age: 26,
        endereco: {
            rua: 'Av. Brasil',
            numero: 320
        }
    };

    const { name = 'Não existe', lasName, age} = person;
    console.log(name, sobrenome, idade);

Podemos, também, definir um elemento dentro dessa atribuição via desestruturação e dentro desse elemento definir uma variável

    const pessoa = {
        nome: 'Leonardo',
        sobrenome: 'Teramatsu',
        idade: 26,
        endereco: {
            rua: 'Av. Brasil',
            numero: 320
        }
    };

    // const { nome, sobrenome, idade } = pessoa;
    const { nome: teste = '', sobrenome, idade } = pessoa;
    console.log(teste, sobrenome, idade);
    console.log(pessoa.nome);

No caso, a variável teste passa a ter o valor definido pelo elemento nome que está dentro do objeto pessoa.

Agora, se eu quiser acessar os elementos definidos dentro de endereco?? O formato a seguir só devolverá um objeto

    const pessoa = {
        nome: 'Leonardo',
        sobrenome: 'Teramatsu',
        idade: 26,
        endereco: {
            rua: 'Av. Brasil',
            numero: 320
        }
    };

    // const { nome, sobrenome, idade } = pessoa;
    const { nome: teste = '', sobrenome, idade, endereco } = pessoa;
    console.log(teste, sobrenome, idade);
    console.log(endereco);
    console.log(pessoa.nome);

No caso, se eu quiser acessar os elementos dentro de endereco por atribuição via desestruturação, teria que ser da seguinte forma

    const pessoa = {
        nome: 'Leonardo',
        sobrenome: 'Teramatsu',
        idade: 26,
        endereco: {
            rua: 'Av. Brasil',
            numero: 320
        }
    };

    // const { nome, sobrenome, idade } = pessoa;
    // com um valor padrao para teste, que é o vazio, caso o elemento nome não esteja definido no objeto
    const { nome: teste = '', sobrenome, idade, endereco: { rua, numero } } = pessoa;
    console.log(teste, sobrenome, idade);
    // console.log(endereco);
    console.log(rua, numero);
    console.log(pessoa.nome);

Mas isso não nega a possibilidade de novamente pegarmos o endereco em forma de objeto inteiro mesmo pego os valores definidos dentro dele

    const pessoa = {
        nome: 'Leonardo',
        sobrenome: 'Teramatsu',
        idade: 26,
        endereco: {
            rua: 'Av. Brasil',
            numero: 320
        }
    };

    // const { nome, sobrenome, idade } = pessoa;
    const { nome: teste = '', sobrenome, idade, endereco: { rua, numero }, endereco } = pessoa;
    console.log(teste, sobrenome, idade);
    console.log(endereco);
    console.log(rua, numero);
    console.log(pessoa.nome);

A mesma forma como definimos o valor padrão para o elemento nome, quando colocamos o teste = '', conseguimos fazer para os subelementos de um subobjetos

    const pessoa = {
        nome: 'Leonardo',
        sobrenome: 'Teramatsu',
        idade: 26,
        endereco: {
            rua: 'Av. Brasil',
            numero: 320
        }
    };

    // const { nome, sobrenome, idade } = pessoa;
    const { nome: teste = '', sobrenome, idade, endereco: { rua: r = 123456, numero }, endereco } = pessoa;
    console.log(teste, sobrenome, idade);
    console.log(endereco);
    // console.log(rua, numero);
    console.log(r, numero);
    console.log(pessoa.nome);

Da mesma forma que pegamos o resto (rest) no array, podemos fazer isso para objetos

    const pessoa = {
        nome: 'Leonardo',
        sobrenome: 'Teramatsu',
        idade: 26,
        endereco: {
            rua: 'Av. Brasil',
            numero: 320
        }
    };

    // const { nome, sobrenome, idade } = pessoa;
    // const { nome: teste = '', sobrenome, idade, endereco: { rua: r = 123456, numero }, endereco } = pessoa;
    const { nome, ...resto } = pessoa;
    // console.log(teste, sobrenome, idade);
    // console.log(endereco);
    // console.log(rua, numero);
    // console.log(r, numero);
    console.log(nome, resto);
    console.log(pessoa.nome);

## Aula 18 - For - Clássico - Estrutura de repetição:
Vamos ver sobre a estrutura clássica de repetição, o for.

No caso, usamos muito essa estrutura, pois ele está presente em muita, mas muita, linguagem de programação.

No caso, a sintaxe para essa estrutura é o "for"

    for (let i = 0; i <= 5; i++) {
        console.log('range: ', i);
        console.log(`Linha ${i}`);
    };

Os parâmetros para a repetição podem ser feitas de diversas formas não se restringindo apenas à números posisitivos. Vc pode usar qualquer número inteiro

    for (let i = -100; i <= 500; i++) {
        console.log(`Linha ${i}`);
    };

    for (let i = 500; i >= 400; i -=10) {
        console.log(`Linha ${i}`);
    };

A analogia é que vc consiga fazer algo que similariza à uma progressão aritmética, donde vc tem a liberdade de conseguir definir a razão e o índice inicial do conteúdo.

Podemos usar essa estrutura e dentro dela colocar as condicionais para resolvermos o problema

    for (let i = 0; i <= 10; i++) {
        const par = i % 2 === 0 ? 'par' : 'ímpar';
        console.log(i, par);
    };

Da mesma forma, podemos usar o for para percorrer uma lista

    const frutas = ['Maçã', 'Pêra', 'Uva'];

    for (let i = 0; i < frutas.length; i++){
        console.log(frutas[i]);
    };

## Aula 19 - Exercícios com for:
Vamos praticar essa estrutura for para fixar mais os conceitos na sua cabeça.

Vamos usar o arquivo html e usar a estrutura for para criar algumas divs dentro do aquivo html

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ]

As divs que queremos criar no arquivo html.

## Aula 20 - DOM e a árvore do DOM:
Vamos aprender sobre o DOM (Document Object Model) e a sua árvore.

    https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

    https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model

Vimos, até agora, que no arquivo html rodado no navegador, no console, o objeto global, o mais global, que temos é o window. E dentro de window temos o document, que é o que representa o arquivo html

    Window {window: Window, self: Window, document: document, name: '', location: Location, …}

    #document

Ciente disso, ao abrirmos o index.html, da última aula de exercício, e rodarmos ela em algum navegador, ao jogarmos no console "window.document" irá aparecer todo o corpo do arquivo html que criamos. Daí, onde aparece o DOM nisso? Ela aparece exatamente nas tags que criamos via JavaScript usando o document.

No caso, sempre que estivermos falando de DOM, estamos nos referindo ao navegador, que é uma interface de objetos que permitem manipular um objeto dentro da página.

## Aula 21 - For in - Estrutura de repetição:
Vamos ver sobre a outra estrutura de for, que é o for in.

Vimos que o for, quando usamos, ele nos permite iterar usando a ideia de progressão artimética. Mas existe o for in que ela nos fornece uma forma mais direta de iterar, principalmente, uma lista

    const frutas = ['Pera', 'Maçã', 'Uva'];

    for (let i in frutas) {
        console.log(i);
        console.log(frutas[i]);
    }

No caso, o let i in, ele está iterando a lista e lendo os seus índices. Como prova disso, conseguimos ver que no segundo for está sendo devolvido o respectivo elemento que foi definido para cada índice da sequência.

Basicamente, o for in ele lê os índices ou chaves do objeto.

Abaixo está o uso o for in para objetos, chave

    const pessoa = {
        nome: 'Leonardo',
        sobrenome: 'Teramatsu',
        idade: 26
    };

    for (let i in pessoa) {
        console.log(i);
        console.log(pessoa[i]);
    };

Note que, o console.log que devolve o índice i ele devolve exatamente os índices que foram definidos dentro do objeto pessoa (nome, sobrenome e idade), mas a forma como consultamos os valores que foram atribuídos para cada índice, não é a forma usual que vismo antes (pessoa.nome, por exemplo), mas, sim, devemos passar esse índice i como um array dentro do objeto pessoa que foi definido com chaves.

## Aula 22 - For of - Estrutura de repetição:
Vamos ver a outra estrutura de repetição chamado for of.

Se usarmos o for in, que vimos na última aula, faríamos uma espécie como segue

    const nome = 'Leonardo Takashi Teramatsu';

    for (let i in nome) {
        console.log(i, nome[i]);
    }

Agora, se formos usar o for of ficaria o seguinte

    const nome = 'Leonardo Takashi Teramatsu';

    for (let valor of nome) {
        console.log(valor);
    }

Ou seja, note que, o for of, diferentemente de for in, ele devolve diretamente o valor que está definido naquele índice pela variável let valor que estamos usando para iterar o const nome

    const nomes = ['Leonardo', 'João', 'Lucas'];

    for (let valor of nomes) {
        console.log(valor);
    }

Então, isso não faz necessário ter que usar o índice para conseguir consultar o valor que esse índice está definido, pois ele nos cospe diretamente o valor que está definido naquele índice.

Bom, daí vem a pergunta. Vimos que tem for, for in e for of. Quais deles são úteis? Daí a resposta para isso é depende do cenário. Conforme o cenário, vc vai vendo qual delas é mais adequado para o uso.

Uma outra alternativa que temos para iterar os valores diretamente dentro dos arrays, seria o forEach

    const nomes = ['Leonardo', 'João', 'Lucas'];

    for (let valor of nomes) {
        console.log(valor);
    }

    nomes.forEach(function(el, i, array) {
        console.log(el, i, array);
    });

Note que, para iterar uma lista, o forEach, vc consegue definir se vai querer iterar o valor, índice e a lista inteira. Ou seja, ele tem mais flexibilidade para exercer alguma das estruturas for que definimos ou simultanemante tbm.

Obs: O for of para objetos do tipo chave, não vai funcionar!!!!!!!

- for - Geralmente com iteráveis (array ou strings)

- for in - Retorna o índice ou chave (string, array ou objetos)

- for of - Retorna o valor em si (iteráveis, array ou strings)

## Aula 23 - Exercícios com NodeList (Browser):
Vamos fazer um exercício de fixação!

O objetivo do exercício é conseguir colocar a cor de fundo e mudar a cor do texto da seguinte div

    <div class="paragrafos">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Ex pariatur aperiam iure accusamus odio nemo nulla, voluptatibus illo, sed voluptatum deleniti velit saepe.</p>
        <p>Minus illum recusandae temporibus corporis expedita debitis.</p>
    </div>

## Aula 24 - While e Do While - Estrutura de repetição:
Vamos ver uma outra estrutura de repetição, o While e Do While.

Uma característica que difere dessa estrutura de repetição com o for, é que ela realiza as repetições mediante à condicionais que vc pode montar da forma como vc quiser. Ou seja, isso te permite, por exemplo, montar alguma condicional que faça do while entrar em um loop infinito, dependendo do tipo de condicional que vc define

    let i = 0;

    while (i <= 10) {
        console.log(i);
        i++;
    }

Note que, já com a forma acima, se quisermos, conseguimos construir um loop infinito, que é tirando o "i++;"

    const nome = 'Leonardo';
    let j = 0;

    while (j < nome.length) {
        console.log(nome[j]);
        j++;
    }

A mesma analogia funciona acima.

Vamos ver, agora, um caso mais real

    function random (min, max) {
        const r = Math.random() * (max-min) + min;
        return Math.floor(r);
    }

    const min = 1;
    const max = 50;
    let rand = random(min, max);
    console.log(rand);

    while (rand !== 10) {
        rand = random(min, max);
        console.log(rand);
    }

Note que, a função random que definimos é o que atualiza toda hora os valores do rand visto que a condição em while esteja true.

Agora, vamos ver sobre o Do While.

Basicamente, o Do while ele irá executar primeiro a ação para depois checar a condição

    function random (min, max) {
        const r = Math.random() * (max-min) + min;
        return Math.floor(r);
    }

    const min = 1;
    const max = 50;
    // let rand = random(min, max);
    let rand = 10;
    console.log(rand);

    while (rand !== 10) {
        rand = random(min, max);
        console.log(rand);
    }
    console.log('------------------');
    do {
        rand = random(min, max);
        console.log(rand); 
    } while (rand !== 10);

Você vai ver que nesse código acima, o while não irá rodar, mas o do while irá, pois enquanto em while, o rand, de ante mão, já está como 10, em do while, como é o inverso do while, ele irá atualizar primeiro e depois irá checar a condicional.

No caso, o do while, ele sempre irá executar, pelo menos, uma vez o código, pois a conferência da condicional somente irá ocorrer depois disso.

## Aula 25 - Break e Continue:
Vamos aprender a usar o break e o continue.

No caso, vamos ver primeiro a sintaxe continue

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let numero of numeros) {
        if (numero === 2) {
            continue;
        }
        console.log(numero);
    }

Basicamente, o que está acontecendo acima, é que quando a variável numero for, de fato, 2, então ele irá entrar na condicional e dará continuidade sem executar a linha dos códigos que estão vindo posteriormente.

No caso, literalmente, irá dizer que visto que é 2, então eu não quero que vc execute a tal ação que está vindo adiante para esse valor, mas tbm eu não quero que pare a iteração dando continuidade nela.

Mas aí, qual é a principal vantagem de usar o continue, assim vale para o break. Está no fato dela te ajudar otimizar a velocidade de compilação do seu código de não ter a necessidade de realizar outras tarefas desnecessárias. Ou seja, ela te ajuda a refinar a execução somente o necessário e o suficiente que vc precisa. E isso, no ponto de vista computacional, ela é muito, mas muito, eficiente dependendo da forma como vc saiba usar essas duas sintaxes para otimizar a compilação do seu código.

No caso, usando o break

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let numero of numeros) {

        if (numero === 7) {
            console.log(`Achei o número ${numero}`);
            break;
        }

        if (numero === 2 || numero === 5) {
            console.log(`Puleir o o número ${numero}`);
            continue;
        }

        console.log(numero);
    }

Basicamente, o código acima me fala, se eu chegar no número 7, então saia desse loop.

O mesmo vale para o uso dessas sintaxes para a estrutura while e Do while

    let i = 0;

    while (i < numeros.length) {
        let numero = numeros[i];

        if (numero === 2) {
            console.log(`Pulei o número ${numero}`);
            continue;
        }

        console.log(numero);

        if (numero === 7) {
            console.log(`${numero} encontrado, saindo...`);
            break;
        }

        i++;
    }

Note que, o código acima vai dar um loop infinito. Tente ver o motivo!

## Aula 26 - Exercício com lógica de programação - 01:
Vamos praticar tais exercícios.

A sentença é o seguinte

    // Escreva uma função que recebe 2 números e retorna o maior deles

## Aula 27 - Exercício com lógica de programação - 02:
Vamos praticar tais exercícios.

A sentença é o seguinte

    // Escreva uma função chamada ePaisagem que
    // recebe dois argumentos, larguna e altura
    // de uma imagem (number).
    // Retorne true e se a imagem estiver no modo paisagem.

## Aula 28 - Exercício com lógica de programação - 03:
Vamos praticar tais exercícios.

A sentença é o seguinte

    // Escreva uma função que recebe um número e retorne o seguinte:
    // Número é divisível por 3 = Fizz
    // Número é divisível por 5 = Buzz
    // Número é divisível por 3 e 5 = FizzBuzz
    // Número NÃO é divisível por 3 e 5 = Retorna o próprio número
    // Checar se o número é realmente um número
    // Use a função com números de 0 a 100

## Aula 29 - Tratando e lançando erros (try, catch, throw):
Vamos ver sobre tratamento e lançamento de erros, try, catch e throw.

Primeiro, vamos gerar o um erro aqui

    console.log(naoExisto);

Bom, o console acima, vai gerar um erro que mostra que o "naoExisto" não está definido.

No caso, para tratarmos esses erros que existem as sintaxes que foram mencionadas acima

    try {
        console.log(naoExisto);
    } catch(err) {
        console.log('naoExiste não existe!');
        // console.log(err);
    }

Basicamente, o que está acontecendo acima é o seguinte. O try ele vai tentar executar uma ação, daí o catch ele irá captar qual seria o erro que está acontecendo caso a tal ação, a sua execução, não seja bem sucedida, donde pode ser expresso propriamente o erro pela variável 'err' que foi definida ou colocar um erro personalizado.

Obs: Por meios didáticos, está sendo usado o console para mostrar qual tipo de erro que está acontecendo. Entretanto, precisamos lembrar que isso feito na vida real é algo potencialmente perigoso, pois estaria correndo o risco de exposição de dados importantes do seu trabalho ou de uma empresa. No caso, tais erros que estaremos simulando não pode chegar nas mãos dos usuários.

Temos a sintaxe throw tbm que serve para lançar algum erro personalizado e o catch captar esse tal erro personalizado

    function soma(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw('x e y precisam ser números.');
        }

        return x + y;
    }

    try {
        console.log(soma(1,2));
        console.log(soma('1',2));
    } catch(err) {
        console.log(err);
    }

No caso, o que foi colocado dentro do throw, será captado pelo "err" que foi definido dentro do catch. Ou seja, em vez de mostrar o erro em detalhe pelo catch, ele irá exibir esse erro personalizado que foi definido pelo throw dentro da função soma.

Agora, se por acaso vc quiser que o throw lance o erro estilo JavaScript, detalhando tudo bastaria colocar o seguinte comando

    function soma(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            // throw('x e y precisam ser números.');
            throw new Error('x e y precisam ser números.');
        }

        return x + y;
    }

    try {
        console.log(soma(1,2));
        console.log(soma('1',2));
    } catch(err) {
        console.log(err);
    }

Assim, o catch irá exibir o que foi definido no throw. E tem vários tipos, tanto Error quanto ReferenceError

    function soma(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            // throw('x e y precisam ser números.');
            // throw new Error('x e y precisam ser números.');
            throw new ReferenceError('x e y precisam ser números.');
        }

        return x + y;
    }

    try {
        console.log(soma(1,2));
        console.log(soma('1',2));
    } catch(err) {
        console.log(err);
    }

## Aula 30 - Tratando e lançando erros (try, catch, finally):
Vamos continuar com mais tratamento de erros.

No caso, vimos try, catch e throw. Mas existe um outro sintaxe que podemos usar tbm que é o finally. Esse finally sempre será executado!

    try {
        console.log('Abri um arquivo');
        console.log('Manipulei o arquivo e gerou um erro');
        console.log('Fechei o arquivo');
        console.log(a);
    } catch (e) {
        console.log(e);
        console.log('Uma msg mais amiǵável');
        console.log('Tratando o erro');
    } finally {
        console.log('FINALLY: Eu sempre sou executado');
    }

Basicamente, o finally, ela serve para vc conseguir lidar com a seguinte situação. Existem casos em que dá erro e que o processo para bem no ponto em que não é desejável, seja ela fechar um arquivo, ou apagar alguns dados, etc... No caso, o finally ele permite que quando tal evento aconteça, independente se deu erro ou não, ele consiga executar a tal ação.

Podemos, tbm, colocar try, catch e finally dentro de algum try ou catch ou finally tbm.

## Aula 31 - setInterval e setTimeout:
Vamos mostrar duas funções que estão disponíveis tanto no node quanto no navegador, setInterval e setTimeout.

No caso, començando pelo setInterval, essa função ele pode configurar um intervalo de tempo para que uma função ou alguma ação seja executada em um determinado momento. Um exemplo básico disso seria

    function mostraHora() {
        let data = new Date();

        return data.toLocaleDateString('pt-BR', {
            hour12: false
        });
    }

    function funcaoDoInterval() {
        console.log(mostraHora());
    }

    setInterval(funcaoDoInterval, 1000);

Basicamente, no intervalo de a cada 1 segundo vc consegue executar a função. E isso irá acontecer sem parar, a não ser que vc coloque alguma condição dê um stop.

Aqui está uma outra forma mais enxuta de executar o código

    function mostraHora() {
        let data = new Date();

        return data.toLocaleDateString('pt-BR', {
            hour12: false
        });
    }

    // function funcaoDoInterval() {
    //     console.log(mostraHora());
    // }

    // setInterval(funcaoDoInterval, 1000);
    setInterval(function () {
        console.log(mostraHora());
    }, 1000);

Já o setTimeout, ele executa apenas uma vez e para, donde serve para parar o setInterval tbm

    function mostraHora() {
        let data = new Date();

        return data.toLocaleDateString('pt-BR', {
            hour12: false
        });
    }

    // function funcaoDoInterval() {
    //     console.log(mostraHora());
    // }

    // setInterval(funcaoDoInterval, 1000);
    // setInterval(function () {
    //     console.log(mostraHora());
    // }, 1000);

    const timer = setInterval(function () {
        console.log(mostraHora());
    }, 1000);

    setTimeout(function () {
        clearInterval(timer);
    }, 1000);

## Aula 32 - Exercício - Criando um timer com setInterval:
Bom, no diretório da aula 32 temos o modelos que precisamos para fazermos o exercício.

O objetivo é criar um cronômetro igualzinho ao que está no diretório relogio, mas do seu jeito.

## Aula 33 - Criando uma Lista de tarefas:
O objetivo é realizar uma listar tarefas que nem está em lista-tarefas. Entretanto, essa aula não será uma aula de exercícios, mas, sim, uma aula normal, pois veremos muito conteúdo novo (no ponto de vista de quem está estudando).

Logo, inicialmente, no arquivo index.html, vamos colocar a seguinte alteração

    <!DOCTYPE html>
    <html lang="pt-BR">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Modelo</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    </head>

    <body>

    <section class="container">
        <h1>Lista de tarefas</h1>
        <p>
        <input type="text" class="input-tarefa">
        <button class="btn-tarefa">Adicionar nova tarefa</button>
        </p>

        <ul class="tarefas"></ul>
    </section>

    <script src="./assets/js/main.js"></script>
    </body>

    </html>

Vamos agora trabalhar em cima disso. No caso, primeiro, vamos ter que selecionar as classes. Assim, no arquivo main.js que se localiza no diretório js que se encontra no diretório assets colocamos o seguinte

    const inputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas');

Primeiramente, vamos capturar o evento de click do botão "Adicionar nova tarefa".

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    // Captura o evento da tecla 'Enter'.
    inputTarefa.addEventListener('keypress', function(e) {
        console.log(e);
    });

    function criaTarefa(textoInput) {
        // console.log(textoInput);
        const li = criaLi();
        li.innerText = textoInput;
        tarefas.appendChild(li);
    }

    btnTarefa.addEventListener('click', function(e) {
        // Isso serve para evitar de ficar retornando algo vazio e considerar algum retorno
        // somente quando algo for colocado dentro do input.
        if(!inputTarefa.value) return;
        // console.log(inputTarefa.value);
        criaTarefa(inputTarefa.value);
    });

No caso, um assunto novo seria o comando que pega o evento de pressionar a tecla "Enter" acima que é expresso pelo "inputTarefa.addEventListener('keypress')". Existem outros como 'keyup' e 'keydown', vale a pena dar uma olhada nesses eventos tbm. Por essa via, podemos saber o código de cada tecla que temos no nosso computador. Por exemplo, vendo pelo o que será exibido pelo 'console.log(e);', analisando pelo console do navegador, podemos ver que será retornado um objeto a cada tipo de tecla que é pressionada. Daí, ao abrirmos esse objeto podmeos ver o código dessa tecla pelo keyCode. A tecla 'Enter', por exemplo, o código dela é '13'.

Consequentemente, podemos configurar as funções dentro desses eventos da seguinte maneira

    // Captura o evento da tecla 'Enter'.
    inputTarefa.addEventListener('keypress', function(e) {
        // console.log(e);
        if (e.keyCode === 13) {
            console.log('Enter pressionado');
        }
    });

Assim, concluindo a função acima, ficaria da seguinte forma

    // Captura o evento da tecla 'Enter'.
    inputTarefa.addEventListener('keypress', function(e) {
        // console.log(e);
        if (e.keyCode === 13) {
            // console.log('Enter pressionado');
            if(!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });

Agora, vamos precisar de uma outra função que limpe o conteúdo que foi colocado dentro do input depois que adicionarmos alguma tarefa na lista

    function limpaInput () {
        inputTarefa.value = '';
        // Esse evento faz o cursor '|', que fica dentro do input, piscando
        inputTarefa.focus();
    }

Aqui, vemos um novo método aplicado, que é recurso do JavaScript, que é o '.focus()' que serve para fazer o cursor, '|', que fica dentro da aba do input ficar piscando.

Assim, vamos chamar essa função dentro da função criaTarefa

    function criaTarefa(textoInput) {
        // console.log(textoInput);
        const li = criaLi();
        li.innerText = textoInput;
        tarefas.appendChild(li);
        limpaInput();
    }

Falta agora criar uma função que exclua as tarefas que foram criadas

    function criaBotaoApagar(li) {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        li.appendChild(botaoApagar);
    }

No caso, agora, só precisamos chamar essa função dentro da função criaTarefa

    function criaTarefa(textoInput) {
        // console.log(textoInput);
        const li = criaLi();
        li.innerText = textoInput;
        tarefas.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
    }

O que falta, agora, é conseguirmos validar o evento de click do botão apagar. Bom, o usual seria usar o método .classList.add() para colocar uma classe dentro desse botão para depois aplicarmos um eventAddListener nela, mas, desta vez, vamos fazer de uma forma diferente que é usando o setAttribute

    function criaBotaoApagar(li) {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar');
        li.appendChild(botaoApagar);
    }

Esse método, setAttribute, ela tem outras funcionalidades não se limitando apenas à criação de classes dentro das tags. Vale a pena dar uma olhada mais à fundo nisso. Bom, agora, só falta capturarmos o evento de click nesse botão de apagar. Usado o steAttribute, agora, foi mostrado que o botão apagar está sendo exibido no console de qual tarefa

    document.addEventListener('click', function(e) {
        // .target te permite saber qual a classe que está sendo capturado
        const el = e.target;
        console.log(el);
    });

Agora, só precisamos captar a classe de forma correta, então

    document.addEventListener('click', function(e) {
        // .target te permite saber qual a classe que está sendo capturado
        const el = e.target;
        // console.log(el);
        if (el.classList.contains('apagar')) {
            console.log('Apagar clicado');
        }
    });

Bom, agora, visto que está sendo capturado o evento de click no apagar corretamente, vamos precisar definir uma função que, de fato, apague a tal lista. No caso, o que precisamos fazer seria que nessa situação o botão 'Apagar' está dentro de uma tag 'li' que está à um nível acima. E o que queremos é apagar essa tag de um nível acima

    document.addEventListener('click', function(e) {
        // .target te permite saber qual a classe que está sendo capturado
        const el = e.target;
        // console.log(el);
        if (el.classList.contains('apagar')) {
            // console.log('Apagar clicado');
            console.log(el.parentElement);
        }
    });

No caso, o console.log(el.parentElement), ele te mostra quem é a tag pai na tal a tag onde contém a classe, apagar, está inclusa. No caso, vamos remover esse elemento pai da seguinte forma

    document.addEventListener('click', function(e) {
        // .target te permite saber qual a classe que está sendo capturado
        const el = e.target;
        // console.log(el);
        if (el.classList.contains('apagar')) {
            // console.log('Apagar clicado');
            // console.log(el.parentElement);
            el.parentElement.remove();
        }
    });

Isso já é o suficiente para remover a tarefa criada e que está listada.

Bom, agora, só falta salvar essa tarefa. Para isso, vamos criar uma função para isso

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        console.log(liTarefas);
    }

Agora, vamos chamar essa função dentro da função criaTarefa

    function criaTarefa(textoInput) {
        // console.log(textoInput);
        const li = criaLi();
        li.innerText = textoInput;
        tarefas.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }

Daí, ao listarmos algumas tarefas, isso será mostrado pelo NodeList que está sendo exibido pela função salvarTarefas(). No caso, vamos querer salvar tbm essas tarefas que foram listadas tbm

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];
        console.log(liTarefas);

        for (let tarefa of liTarefas) {
            // console.log(tarefa.innerText);
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '');
        }
    }

Agora, vamos querer que essa função, assim como o nome já disse, salve elas na base local. Literalmente um cache. Daí, usa-se o localStorage para fazermos isso

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

O lugar onde vc consegue consultar esse cache seria em application, abrindo o console pelo navegador.

Agora, o que resta realizar seria salvar as tarefas até quando removemos algumas que estão listados. No caso, precisamos chamar essa função salvarTarefas até no evento que está removendo as tag li

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

Visto que foi salvo no cache, vamos precisar exibir essas tarefas salvas sempre que revisitamos a página. Daí, vamos criar uma função para isso

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);
        // console.log(tarefas);
        // console.log(listaDeTarefas);
        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
        }
    }
