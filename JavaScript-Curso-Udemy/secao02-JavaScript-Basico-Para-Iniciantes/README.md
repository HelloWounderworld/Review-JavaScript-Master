# Seção 2 - JavaScript Básico - Para iniciantes:

## Aula 01 - Console.log - A primeira coisa que você vai ver em JS:
O ";" é opcional no JavaScript. Mas nesse curso, pelo professor, será colocado o ";" mais para o aluno aprender em qual momento é correto coloca-lo ou não.

O console.log ele é um método:

    https://horadecodar.com.br/2020/05/22/o-que-e-console-log-como-utilizar/

    https://pt.stackoverflow.com/questions/38057/o-que-%C3%A9-console-log

## Aula 02 - Execícios:
Exercício de fixação
Coloque a seguinte frase:

    Meu nome é "NOME". Estou aprendendo JavaScript às 10 da manhã.

Donde em "NOME" colocar o seu nome e mostrar a aspas duplas.

Em 'às 10" o 10, precisa ser um número.

## Aula 03 - Repositório do curso no Github:
Tudo o que você assistir nas aulas (o código que eu digito) está em um repositório no Github. Você pode acessá-lo via: 
    
    https://github.com/luizomf/curso-js

Use o código apenas como referência em seções mais complexas. Tente digitar a maioria dos códigos, isso ajuda a fixar o conteúdo.

As alterações são enviadas ao final das aulas, com o conteúdo que determinado arquivo ficou ao terminar determinada aula.

Uma observação importante: as pastas não estão na ordem em que a Udemy cria automaticamente, mas na ordem de criação. Você vai me ver dizer em várias aulas que estou na pasta "Aula XXX", essa é a ordem que será apresentada no repositório (caso eu não fale, é só observar em qual pasta estou no vídeo).

Em algumas seções específicas, existem repositórios separados. Como as seções de API Rest, React ou TypeScript. Isso será especificado no início de cada seção.

## Aula 04 - Me ajude a produzir conteúdo gratuito:
Eu acredito que a educação deva ser gratuita, mas NINGUÉM valoriza conteúdo gratuito. Eu gostaria que você me ajudasse a mudar isso. Você pode começar me seguindo, curtindo, comentando e interagindo com o meu conteúdo gratuito na redes sociais.

YouTube: https://www.youtube.com/otaviomiranda

TikTok: https://www.tiktok.com/@otaviomirandabr

Instagram: https://www.instagram.com/otaviomirandabr/

Twitter: https://twitter.com/otaviomirandabr

Discord

Com a intenção de conectar os alunos, criamos um servidor no discord

    https://discord.gg/67PyPrXhwz

A ideia é simplesmente conectar alunos, fazer networking, trocar informações e coisas relacionadas.

Para tirar dúvidas com o instrutor, você ainda deve usar o sistema de perguntas e respostas da Udemy, visto que o grupo é voltado para relações entre alunos somente.

Veja todos os meus cursos em: 

https://www.otaviomiranda.com.br/2017/meus-cursos/

Atenção: só para ficar claro, eu (Luiz Otávio) não participo ativamente dessa comunidade (ou quase nenhuma outra rede social).

Sigam ele nas redes, galera!! Gosto muito do profissionalismo dele com uma postura extremamente altruísta que visa a possibilidade de fornecer uma edução gratuita e de qualidade para qualquer pessoa que desperte interesse no assunto!

Espero poder estar colaborando contigo professor, Luiz Otávio Miranda, pois partilho da mesma postura sobre a educação!

Na sociedade em que vivemos eu acho muito errado a postura de pensamento de pessoas que tiveram privilégios na educação de se sentirem que estão em vantagens. Eu, muito pelo contrário, se eu tive privilégio na educação, eu sinto-me mais em dívida com a sociedade do que em vantagem e, para mim, é mais que uma obrigação de eu partilhar dos meus conhecimentos de forma gratuita para as pessoas, que lhe despertam interesse em saber sobre o assunto que eu sei, que não tiveram o direito de conseguir ter o acesso à tal informação/conhecimento. E isso, de longe, não é uma postura de superioriedade, mas, sim, uma postura de saber se colocar no lugar da pessoa e ver que ela é mais uma vítima que teve os seus direitos roubados e que eu tenho a obrigação moral de partilhar para ela o que ela não teve acesso!

## Aula 05 - Comentários de código:
Usamos "// bla bla bla " ou "/* bla bla bla */" para conseguirmos comentar em JavaScript.

A diferença é que "//" ela serve para comentar em apenas uma linha.

    // Comentário

Já "/* */" ela serve para vc poder comentar em várias linhas.

    /* 
        Comendando em várias linhas
        Sem nenhum problema
    */

No caso, podemos usar "//" para tonar algum código como comentário.

A vantagem disso seria que os comentários acima, quando rodado o arquivo para compilação, ele será desconsiderado/não será executado.

## Aula 06 - Navegador vs Node (HTML + JavaScript):
Vamos aprender a mesclar o arquivo HTML com o arquivo JavaScript.

Vamos criar o arquivo index.js e, por hora, vamos colocar um console.log nele para certificar que está tudo funcionando corretamente:

    console.log('Hello WounderWorld!');

Em seguida, no mesmo diretório, vamos criar um arquivo index.html.

Nesse arquivo, se vc colocar na primeira linha "!" ou "html:5" vc verá que o VSCode mostrará as opções de uma configuração do template padrão para vc iniciar a sua codificação.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

Só vamos mudar o lang para "pt-BR" e, por hora, o 

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

Não serão necessários, então podemos apaga-las.

    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

Agoro, no title, vamos colocar o seguinte.

    <title>Minha primeira página HTML</title>

Em seguida, vamos colocar a tag script para chamarmos o arquivo .js. 

Antes disso, quero comentar uma coisa sobre isso. É recomendável que a tag script, nas práticas usuais, ela seja chamado dentro da tag head. Entretanto, por hora, nessa aula vamos chamar a tag script dentro do body.

No caso, chamar a tag script dentro de head tem os seus riscos, pois dependendo de qual script vc irá querer importar, isso poderia deixar o carregamento da sua página no navegador muito lento, pois o head será o primeiro a ser carregado do que o body, sendo que o conteúdo mesmo a ser exibido ficaria no body.

    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Minha primeira página HTML</title>
    </head>
    <body>
        <script>
            // Um comentário
            console.log('Hello WounderWorld');
            console.log('Este trecho será exibido no Console do navegador!');
        </script>
    </body>
    </html>

Um macete que vc pode usar caso as indentações estiverem fora do seu lugar, seria clicar com o botão direto do mouse e selecionar a opção "Format Document".

Para rodarmos esse arquivo html, eu estou usando a extensão chamada Live Server. Porém, se quiser uma forma mais padrão/analógico, vc poderia simplesmente clicar duas vezes no arquivo index.html que ela abrirá em um navegador automaticamente.

Mas, agora, vamos transferir todo o trecho do console.log que colocamos dentro da tag script dentro do arquivo index.js e nessa tag script vamos colocar o seguinte para importar o arquivo index.js.

    <script src="./index.js"></script>

No caso, especifiquei no script o caminho em que se encontra o index.js e pedir para ele considerar o que está dentro desse arquivo index.js.

Vamos brincar um pouco do método "alert()" dentro de HTML. Lembre-se que o alert, ele é um método que bloqueia outros métodos ou compilações posteriores até que o usuário não faça o método alert parar de funcionar, "clicando no ok".

O Nodejs não vai reconhecer o método "alert", no caso, se eu colocar o alert no arquivo index.js

    alert('Olá mundo!');

E rodar somente o arquivo index.js irá aparecer a seguinte mensagem abaixo.

    /home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula06-Navegador-vs-Node-HTML-mais-JavaScript/index.js:5
    alert('Olá mundo!');
    ^

    ReferenceError: alert is not defined
        at Object.<anonymous> (/home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula06-Navegador-vs-Node-HTML-mais-JavaScript/index.js:5:2)
        at Module._compile (internal/modules/cjs/loader.js:1085:14)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
        at Module.load (internal/modules/cjs/loader.js:950:32)
        at Function.Module._load (internal/modules/cjs/loader.js:790:12)
        at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
        at internal/main/run_main_module.js:17:47

Mas, ao rodarmos pelo index.html no navegador, esse método será executado.

Para deixarmos mais profissional a organização dos arquivos, geralmente, é usual criarmos uma pasta em que tenha somente arquivos JavaScript e outra que tenha somente arquivos html para exibição. Por hora, vamos criar um diretório novo chamado "js" e dentro dela vc move o arquivo index.js. Feito isso, será necessário, no script, configurar uma nova rota, pois agora o arquivo index.js não se encontra no mesmo nível.

    <script src="./js/index.js"></script>

## Aula 07 - Variáveis com let:
Começando com um arquivo index.js e dentro dela colocamos o seguinte

    console.log('João nasceu em 1984.');
    console.log('Em 2000 João conheceu Maria.');
    console.log('João casou-se com Maria em 2012.');
    console.log('Maria teve 1 filho com João em 2015.');
    console.log('O filho de João se chama Eduardo.');

Agora, note que, dentro desse conjunto de consoles tem um elemento muito repetitivo, "João". No caso, seria interessante abstrair esse nome repetido dentro da memória. Para isso, vamos criar uma variável.

Em JavaScript, temos as seguintes formas de criamos as variáveis:

    var

    let

    const

No caso, vamos aprender a manusear a criação de variável via "let" e entender as funcionalidades deles. No caso, no arquivo index.js colocamos o seguinte:

    let nome = 'João';

    console.log('João nasceu em 1984.');
    console.log('Em 2000 João conheceu Maria.');
    console.log('João casou-se com Maria em 2012.');
    console.log('Maria teve 1 filho com João em 2015.');
    console.log('O filho de João se chama Eduardo.');

No caso, agora, vamos substituir essa variável no console, em todos os pontos em que aparece o nome, "João".

    let nome = 'João';

    console.log(nome, 'nasceu em 1984.');
    console.log('Em 2000', nome,'conheceu Maria.');
    console.log(nome, 'casou-se com Maria em 2012.');
    console.log('Maria teve 1 filho com', nome,'em 2015.');
    console.log('O filho de', nome,'se chama Eduardo.');

Ao rodarmos, vamos ver que tudo estará funcionando como antes

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula07-Variaveis-com-let/index.js"
    João nasceu em 1984.
    Em 2000 João conheceu Maria.
    João casou-se com Maria em 2012.
    Maria teve 1 filho com João em 2015.
    O filho de João se chama Eduardo.

Agora, para vermos a vantagem disso, seria se modificarmos o nome, "João", para um outro nome, não teremos nenhum trabalho de termos que ficar trocando o nome, manualmente, uma por uma.

    let nome = 'Takashi';

    console.log(nome, 'nasceu em 1984.');
    console.log('Em 2000', nome,'conheceu Maria.');
    console.log(nome, 'casou-se com Maria em 2012.');
    console.log('Maria teve 1 filho com', nome,'em 2015.');
    console.log('O filho de', nome,'se chama Eduardo.');

Ao rodarmos o código, podemos ver que no lugar de João foi trocado pelo nome Takashi que foi a modificação feita na variável nome.

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula07-Variaveis-com-let/index.js"
    Takashi nasceu em 1984.
    Em 2000 Takashi conheceu Maria.
    Takashi casou-se com Maria em 2012.
    Maria teve 1 filho com Takashi em 2015.
    O filho de Takashi se chama Eduardo.

Agora, conhecendo mais um pouco das fucionalidades dessa variável.

Podemos declarar uma variável mas não definirmos nada para ela.

    let nome;

    console.log(nome);

No caso, ao rodarmos o arquivo para verificarmos o que está acontecendo, será devevolvido um valor "undefined" que indica que não foi definindo nenhum valor para essa variável.

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula07-Variaveis-com-let/index.js"
    undefined

No caso, se quisermos definir algum valor nessa variável sem definição, bastaríamos fazer o seguinte

    let nome; // Declarou a variável.
    nome = 'Qualquer valor'; // Inicializando a variável
    console.log(nome);

Assim, se rodarmos teremos o seguinte.

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula07-Variaveis-com-let/index.js"
    Qualquer valor

No caso, ao longo do processo, vc pode, tbm, ficar modficando o valor da variável como seguinte:

    let nome; // Declarou a variável.
    nome = 'Leonardo'; // Inicializando a variável
    console.log(nome);
    nome = 'Takashi';
    console.log(nome);

Ao executarmos o código acima, temos

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula07-Variaveis-com-let/index.js"
    Leonardo
    Takashi

Lembre-se uma vez declarado um nome, ela não pode ser declarada novamente como seguinte 

    let nome; // Declarou a variável.
    nome = 'Leonardo'; // Inicializando a variável
    console.log(nome);
    nome = 'Takashi';
    console.log(nome);

    let nome;

Se rodarmos o código acima, será exibido a seguinte mensagem

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula07-Variaveis-com-let/index.js"
    /home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula07-Variaveis-com-let/index.js:15
    let nome;
        ^

    SyntaxError: Identifier 'nome' has already been declared
        at wrapSafe (internal/modules/cjs/loader.js:1001:16)
        at Module._compile (internal/modules/cjs/loader.js:1049:27)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
        at Module.load (internal/modules/cjs/loader.js:950:32)
        at Function.Module._load (internal/modules/cjs/loader.js:790:12)
        at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
        at internal/main/run_main_module.js:17:47

Além disso, em variáveis, não podemos definir os nomes com as palavras reservadas.

    // Não podemos criar variáveis com palavras reservadas
    // let let;
    // let console;
    // let if;
    // etc...

Um outro ponto importante seria que as variáveis precisam ter nomes significativos, para boas práticas.

    // Variáveis precisam ter nomes significativos
    let n = 'João';
    console.log(n);

No exemplo acima, o código vai até funcionar. Mas imagina se vc tiver um código enorme? Se definirmos os nomes das variáveis de forma totalmente sem sentido, isso dificultaria demais a manutenção ou correção de algum erro.

Não podemos começar o nome de uma variável com um número.

    // Não podemos criar o nome de uma variável que começa com um número.
    // let 1num = 23;

No caso, uma boa prática seria vc sempre, na medida do possível, a não ser que vc trabalhe com funções consultoras, sempre definir os nomes em letras minúsculas.

Não podemos colocar espaços ou traços nos nomes das variáveis

    // Os nomes das variáveis não podem conter espaços ou traços
    // let nome cliente;
    // let nome-cliente;

Caso quisermos definir um nome composto, vamos ter que utilizar o camelCase

    // Caso quisermos utilizar os nomes compostos nas variáveis, usamos o camelCase
    let nomeCompleto = 'Leonardo Takashi Teramatsu';
    let nomeCompletoDoCliente = 'Takashi';

As tais variáveis que estudamos até agora, são conhecidos como Case-sensitive

    // As tais variáveis que estudamos até agora, são conhecidos como Case-sensitive
    let nomeCliente = 'Leonardo';
    let nomecliente = 'Takashi';

    console.log(nomeCliente, nomecliente);
    // No caso, as variáveis distingue entre letra maíscula e minúscula mesmo que sejam nomes iguais.

Não podemos redeclarar variáveis com o let

    // Não podemos redeclarar variáveis com o let
    let nomeCliente = 'Leonardo';
    nomeCliente = 'Takashi';

    console.log(nomeCliente);    

No caso, ao rodarmos o código acima, vamos ver que teremos um retorno da última definição da variável

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/secao02-JavaScript-Basico-Para-Iniciantes/Aula07-Variaveis-com-let/index.js"
    Takashi

Por último, não utilize var, mas, sim, o let!!!!!! No caso, sempre que vc pensar em algo que vai variar, utilize o let e não o var, pois o var está bem obsoleto por ele ser antigo.

    https://medium.com/@codingsam/awesome-javascript-no-more-var-working-title-999428999994

## Aula 08 - Constantes com const:
Vamos, awgora, aprender a utilizar uma outra declaração de variável, o const.

As suas funcionalidades e as boas práticas são muito similares aos do let. Então o que exatamente diferencia entre "let" e o "const"?

Seria, pelo fato, de que uma constante, assim como o nome já disse, uma vez declarado algum valor nela, posteriormente, em nenhum passo vc não poderá modificar o valor dessa constante. A constante já precisa ser declarada e, logo em seguida, inicializada. Ou seja, vc não consegue declarar uma constante, que nem é feito em let, para depois atribuir algum valor nela.

    const nome;

Se vc rodar o arquivo com essa forma acontecerá o seguinte erro:

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula08-Constantes-com-const/index.js"
    /home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula08-Constantes-com-const/index.js:4
    const nome;
        ^^^^

    SyntaxError: Missing initializer in const declaration
        at wrapSafe (internal/modules/cjs/loader.js:1001:16)
        at Module._compile (internal/modules/cjs/loader.js:1049:27)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
        at Module.load (internal/modules/cjs/loader.js:950:32)
        at Function.Module._load (internal/modules/cjs/loader.js:790:12)
        at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
        at internal/main/run_main_module.js:17:47

Outra coisa, como foi comentado acima, não podemos modificar o valor da constante.

    // Não dá para mudar o valor da constante
    const nome = 'João';
    nome = 'Leonardo';

Se rodarmos o arquivo index.js, com a forma como está acima, acontecerá o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula08-Constantes-com-const/index.js"
    /home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula08-Constantes-com-const/index.js:9
    nome = 'Leonardo';
        ^

    TypeError: Assignment to constant variable.
        at Object.<anonymous> (/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula08-Constantes-com-const/index.js:9:6)
        at Module._compile (internal/modules/cjs/loader.js:1085:14)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
        at Module.load (internal/modules/cjs/loader.js:950:32)
        at Function.Module._load (internal/modules/cjs/loader.js:790:12)
        at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
        at internal/main/run_main_module.js:17:47

Um outro detalhe muito curioso, assim como vale para a variável let, é que podemos atribuir o valor de uma variável em outra variável

    // Podemos atribuir o valor da const em outras variáveis.
    // Operações aritméticos, as 4 principais: +, -, *, /
    const primeiroNumero = 5;
    const segundoNumero = 10;

    const resultado = primeiroNumero * segundoNumero;
    console.log(resultado);

No caso, uma outra possibilidade viável, seria que, em vez de ficarmos sempre mudando o valor da variável, podemos ir criando novas e novas variável na medida em que seria necessário realizar uma nova atribuição de valor.

    // Podemos atribuir o valor da const em outras variáveis.
    // Operações aritméticos, as 4 principais: +, -, *, /
    const primeiroNumero = 5;
    const segundoNumero = 10;

    const resultado = primeiroNumero * segundoNumero;
    const resultadoDuplicado = resultado * 2;
    console.log(resultado);
    console.log(resultadoDuplicado);

Podemos, agora vai ficar mais interessante, combinar as variáveis const e let, desde que fique claro quais são os valores que não podem ser alterados e outras podemos modificar ao longo do processo, caso vc não queira ficar toda hora definindo alguma variável nova, conforme novas atribuições de valores.

    // Podemos atribuir o valor da const em outras variáveis.
    // Operações aritméticos, as 4 principais: +, -, *, /
    const primeiroNumero = 5;
    const segundoNumero = 10;

    const resultado = primeiroNumero * segundoNumero;
    const resultadoDuplicado = resultado * 2;
    let resultadoTriplicado = resultado * 3;
    console.log(resultado);
    console.log(resultadoDuplicado);
    console.log(resultadoTriplicado);

Caso vc queira fazer alguma mudança valor resultadoTriplicado, podemos fazer o seguinte

    // Podemos atribuir o valor da const em outras variáveis.
    // Operações aritméticos, as 4 principais: +, -, *, /
    const primeiroNumero = 5;
    const segundoNumero = 10;

    const resultado = primeiroNumero * segundoNumero;
    const resultadoDuplicado = resultado * 2;
    let resultadoTriplicado = resultado * 3;
    resultadoTriplicado = resultadoTriplicado + 5;
    console.log(resultado);
    console.log(resultadoDuplicado);
    console.log(resultadoTriplicado);

No caso, o uso do let, ao realizarmos uma nova atribuição de valor para a mesma variável, vc irá perder o último valor que foi atribuído para ela e isso não ficará guardado na memória. Diferentemente do const que o seu valor sempre ficará guardado, não importa o que foi feito posteriormente com o valor atribuído inicialmente. Ela nunca será perdida.

Bom, no exemplo, até agora, foram usados números, mas que fique claro que isso serve para outros tipos tbm (string, booleano, objetos, etc...).

Vão, com certeza, existir casos em que o valor atribuído ao const ficará oculto, ou seja, vc não terá a mínima ideia de qual tipo de dado estará sendo atribuído ao const, o mesmo vale para let. Isso porque a linguagem JavaScript, ela é uma linguagem de typagem dinâmica, ou seja, vc, dificilmente, irá trabalhar com dados estáticos, mas, sim, a maioria dinâmicas. Para isso, existe um recurso que te ajuda a verificar qual o tipo de dado que está sendo computado nela, o "typeof".

    // Podemos atribuir o valor da const em outras variáveis.
    // Operações aritméticos, as 4 principais: +, -, *, /
    const primeiroNumero = 5;
    const segundoNumero = 10;

    const resultado = primeiroNumero * segundoNumero;
    const resultadoDuplicado = resultado * 2;
    let resultadoTriplicado = resultado * 3;
    resultadoTriplicado = resultadoTriplicado + 5;
    console.log(resultado);
    console.log(resultadoDuplicado);
    console.log(resultadoTriplicado);
    console.log(typeof primeiroNumero);

Podemos fazer uma combinação de uso de typeof, explorando mais um pouco

    // Podemos atribuir o valor da const em outras variáveis.
    // Operações aritméticos, as 4 principais: +, -, *, /
    const primeiroNumero = '5';
    const segundoNumero = 10;

    const resultado = primeiroNumero * segundoNumero;
    const resultadoDuplicado = resultado * 2;
    let resultadoTriplicado = resultado * 3;
    resultadoTriplicado = resultadoTriplicado + 5;
    console.log(resultado);
    console.log(resultadoDuplicado);
    console.log(resultadoTriplicado);
    console.log(typeof primeiroNumero);
    console.log(typeof primeiroNumero + segundoNumero);
    console.log(typeof(typeof primeiroNumero + segundoNumero));
    console.log(typeof(primeiroNumero + segundoNumero));

Antes de rodar o código acima, tenta advinhar, visto que vc entendeu a definição do typeof e as operações artiméticas com os tipos, o que será devolvido no terminal para cada tipo de console.log com a sua forma de uso do typeof.

## Aula 09 - Correção:
No exercício a seguir, você verá uma constante chamada de "altura" e depois modificada para "alturaEmCm", mais precisamente no seguinte trecho de código:

    const nome = 'Luiz Otávio';
    const sobrenome = 'Miranda';
    const idade = 30;
    const peso = 84;
    const alturaEmCm = 1.80; // <-- NESTE LOCAL

Na verdade, este valor (1.80) está em metros, portando, o nome da variável deveria ser "alturaEmM".

Só vi isso na edição da aula, peço desculpas pelo erro.

O código corrigido estará disponível após a aula.

## Aula 10 - Exercícios - Const e Let:
Seguir no index.js dessa aula, que lá estará a questão!

## Aula 11 - Código do exercício solucionado:
Não ire copiar o código solucionado, pois o meu tbm está igualzinho a dele!

## Aula 12 - Let vs Var - Primeira diferença:
Vamos discutir as principais diferenças entre Let e Var.

Lembra que com o let, uma vez declarado uma variável, vc não pode mais declarar novamente? No caso, no var isso é possível como segue

    var nome = 'Leonardo';
    var nome = 'Takashi';
    console.log(nome);

Ao rodarmos o código acima, não ocorrerá nenhum tipo de erro e será retornado o último valor em que foi atribuído para o var nome. No caso, a segunda linha, onde vc declara novamente o var nome, vc está redeclarando ela e colocando algum valor ou nenhuma nela.

No caso, o let, corrige esse detalhe de falha dessa palavra chave "var". Esse recurso foi introduido em ECMAScript 2015 (ES6). (ECMAScript e JavaScript são as mesmas coisas)

Outra coisa que vc não deve fazer, ou seja, entra como uma má prática.

    nome = 'Leonardo';

    console.log(nome);

Isso irá até funcionar, mas sem declarar qual tipo de variável, let, var ou const, isso será visto como um escopo global e poderá trazer sérios problemas ao longo do desenvolvimento.

## Aula 13 - Tipos de dados primitivos:
Vamos aprender mais sobre os tipos de dados primitivos.

Até agora, vimos string, number, undefined. 

Mas, agora, vamos abordar de forma mais séria sobre tais dados.

Strings:

    const nome = 'Leonardo';
    const nome1 = "Leonardo";
    const nome2 = `Leonardo`; // No caso da crase, podemos usar as template strings, ${}, como foi visto nas aulas anteriores.

Number:

    const num1 = 10;
    const num2 = 10.52;

Undefined:

    let nomeAluno; // undefined -> não aponta para local nenhuma na memória.

Nulo, não é igual ao undefined. No caso, se usa quando queremos desconfigurar o valor de uma variável.

Uma obsercação importante: Para o JavaScript, o null é considerado um objeto. Entretanto, o null não se enquadradia como objeto no seu uso prático.

    let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória.
    console.log(typeof sobrenomeAluno, sobrenomeAluno);

Booleano - No caso, esses são muito usado em condicionais e prosicional. Porém, a maioria das vezes usamos por vias de alguma relação, e não de forma tão explícita como está aqui.

Existem casos sim em que vc usa ela de forma explícita, como em casos de vc verificar alunos aprovados ou não.

    const boolean = true; // ou false

### Dados primitivos vs Dados passados por referência:
Quais seriam as diferenças entre dados primitivos e dados passados por referência?

No caso, vamos prestar atenção no seguinte processo

    // Dados passados por referência
    const a = [1, 2];
    const b = a; // O sinal "=" é um operador de atribuição.
    console.log(a, b);

    b.push(3);
    console.log(a, b);

Ao rodarmos o primeiro console.log, irá aparecer o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula13-Tipos-de-dados-primitivos/index.js"
    [ 1, 2 ] [ 1, 2 ]

Agora, ao rodarmos o segundo console.log, depois de ter acrescentado um elemento dentro do objeto "b", teremos o seguinte comportamento

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula13-Tipos-de-dados-primitivos/index.js"
    [ 1, 2, 3 ] [ 1, 2, 3 ]

No caso, note que, o elemento "3" não foi acrescentado somente no objeto "b", mas tbm no "a". O que isso quer dizer? Significa que os dois valores, "a" e "b", criadas acima, ambas, estão apontando para a mesma referência/memória. E isso é típico comportamento de dados passados por referência.

Diferentemente da seguinte

    // Agora, presta atenção no seguinte
    let a1 = 2;
    let b1 = a1;
    // Aqui acima, realmente foi feito uma cópia.

Acima, de fato, foi feito uma cópia do primeiro valor, que é um dado primitivo. Ou seja, se eu alterar o valor de um, essa alteração não afetará a outra.

    // Agora, presta atenção no seguinte
    let a1 = 2;
    let b1 = a1;
    console.log(a1, b1);
    // Aqui acima, realmente foi feito uma cópia.

    a1 = 3;
    console.log(a1, b1);

Rodando o código acima, teremos o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula13-Tipos-de-dados-primitivos/index.js"
    2 2
    3 2

Logo, levantando uma lista de todos os dados primitivos são

    String Number Undefined Null Boolean Symbol

Ainda não vimos symbol, pois é um conceito mais avançado e será visto pela frente.

## Aula 14 - Operadores aritméticos, de atribuição e incremento:
Vamos abordar sobre operadores Aritméticos, de Atribuição e Incremento.

### Operadores Aritméticos:
São eles:

- Adição / Concatenação: +

- Subtração: -

- Divisão: /

- Multiplicação: *

- Potenciação: **

- Resto da divisão: %

Obs: Na matemática, não precisamos de divisão, subtração, potenciação e resto da divisão, quando trabalhamos em algum corpo ou anel, bastaria termos a Adição e a Múltiplicação, pois a subtração e a divisão, em alguns casos, acabam sendo a consequência dessas duas operações.

No caso, como na matemática, aqui tbm as operações tem suas precedências

    const num1 = 5;
    const num2 = 10;
    const num3 = 7;
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 ** num2);
    console.log(num2 % num1);
    console.log(num1 % num2);
    console.log(num1 + num2 * num3);

E a forma para alterarmos as precedências seria usando o entre parênteses, "()".

    console.log((num1 + num2) * num3);

No caso, a ordem das precedências seria o seguinte, prioridade de cima para baixo:

    ()
    **
    * / %
    + -

Se, por acaso, usarmos duas ou três operações diferentes que estão na mesma precedência? Nesse caso, a leitura será feita de esquerda para a direita

    console.log(num1 * num2 / num3);

Ou seja, no exemplo acima, visto que * e / estão na mesma ordem de precedência, a operação será feita, primeiro, multiplicação e, segundo, a divisão, ou seja, de esquerda para direita.

Agora, um macete que é possível fazer para os operadores são os seguintes

    let contador = 1;
    contador++; // é o mesmo que contador = contador + 1
    console.log(contador);
    contador--; // é o mesmo que contador = contador - 1
    console.log(contador);

### Operadores de Incremento:
No caso, usando a variável let, pois será modificado o seu valor, vamos conseguir realizar uma operação de conta básica abreviada quando se é um acrescento de 1 ou diminução de 1. Da mesma forma que essas abreviações podem estar antes ou depois do nome da variável

    let contador2 = 1;
    ++contador2;
    console.log(contador2);
    --contador2;
    console.log(contador2);

Em ambos os casos, será exibido o mesmo resultado.

Mas, então, qual é a diferença entre colocar a abreviação antes e depois do nome da variável. No caso:

- Colocando antes: primeiro faz a conta e depois retorna o seu valor

- Colocado depois: Ele executa a ação que estou pedindo para depois realizar o incremento do valor 1.

Para verificarmos essas duas diferenças de forma nítida, vamos fazer o seguinte:

    let contadorPos = 1;
    console.log(contadorPos++);

Se rodarmos o comando acima, vamos ter o seguinte retorno pelo terminal

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula14-Opradores-Aritmeticos-de-Atribuicao-e-Incremento/index.js"
    1

Ou seja, parece que não foi feito a conta, mas, na verdade, já foi feito, mas antes de realizar a conta, primeiro, foi executado a ação, nesse caso exibir pelo console.log, para depois realizar a soma. Como prova disso, ao colocarmos o seguinte

    let contadorPos = 1;
    console.log(contadorPos++);
    console.log(contadorPos);

Realizando a execução da mesma, será retornado o seguinte pelo terminal:

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula14-Opradores-Aritmeticos-de-Atribuicao-e-Incremento/index.js"
    1
    2

Ou seja, onde é mostrado 1, significa que, antes mesmo de realizar a soma, primeiro, foi executado a ação, nesse caso de exibir pelo console.log, para depois realizar a soma, como ocorre na exibição do segundo  e que consta 2 na exibição.

Agora, quando realizo o pré-incremento, como seguinte

    let contadorPre = 1;
    console.log(++contadorPre);
    console.log(contadorPre);

Será exibido no terminal o seguinte resultado

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula14-Opradores-Aritmeticos-de-Atribuicao-e-Incremento/index.js"
    2
    2

Ou seja, significa que, primeiro, foi feito o incremento e, em seguida, foi feito executado a ação, no caso a exibição.

O mesmo vale para o operador de decremento, "--". Então, da mesma forma que temos o pré-incremento e pós-decremento, pelo ++, temos para o decremento o mesmo.

Um detalhe importante, é que se fizermos o seguinte

    let contador = 1;
    contador++; // é o mesmo que contador = contador + 1
    console.log(contador);

Tanto faz se o contador estará com pós ou pré incremento, em ambos os casos será exibido o valor acrescentado pelo console.log de cima. O que, no caso, precisaria tomar cuidado é pedir para que o console.log exiba o tal processo de incremento e isso não entra em boas práticas, visto a natureza dessas operações que vimos acima.

## Operadores de Atribuição:
Lembre-se, que os operadores de incremento e decremento são feitas o acrescento e diminuição em 1, apenas. Se vc quiser colocar outros valores para serem acrescentados, deverá realizar o seguinte

    let razao = 2
    let contadorOutros = 0;
    contadorOutros = contadorOutros + razao;
    console.log(contadorOutros);
    contadorOutros = contadorOutros + razao;
    console.log(contadorOutros);
    contadorOutros = contadorOutros + razao;
    console.log(contadorOutros);
    contadorOutros = contadorOutros + razao;
    console.log(contadorOutros);

No caso, acima, temos uma representação de uma progressão aritmética na razão 2 com o elemento inicial da sequência igual à 0. Daí, a cada passo em que repetimos a tal operação acima, será acrescentado o valor de 2 para cada passo.

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula14-Opradores-Aritmeticos-de-Atribuicao-e-Incremento/index.js"
    2
    4
    6
    8

Mas, até para esse caso tbm, para atribuir diferentes valores que não seja 1, temos uma abreviação tbm. No caso, seria a seguinte forma

    let r = 5;
    let contadorAbrevia = 0;
    contadorAbrevia += r;
    console.log(contadorAbrevia);
    contadorAbrevia += r;
    console.log(contadorAbrevia);
    contadorAbrevia += r;
    console.log(contadorAbrevia);

Disso, será exibido o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula14-Opradores-Aritmeticos-de-Atribuicao-e-Incremento/index.js"
    5
    10
    15

No caso, o processo anterior, abreviadamente, podemos realizar o mesmo processo para qualquer qualquer operador (-=, *=, /=, **=, %=).

Obs: vc precisa tomar cuidado tbm dos tipos de dados que vc utiliza para realizar as contas. No caso, se vc fizer o seguinte

    let numero1 = 10;
    let numero2 = 'Leonardo';
    console.log(numero1 * numero2);

Ao realizarmos a conta acima, será retornado o NaN (Not a Number)

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula14-Opradores-Aritmeticos-de-Atribuicao-e-Incremento/index.js"
    NaN

Assim, como em outros tipos de dados primitivos.

Teremos casos, em que a conta será feito, quando, por exemplo, se uma string for um número dentro do conteúdo. Mas o melhor caso é sempre termos certeza de que as contas que estamos fazendo seja um número.

Para isso, podemos tbm, sempre antes que façamos alguma conta, usemos uma conversão como parseInt(), Number(), etc...

    let n1 = 10;
    let n2 = parseInt('5');
    console.log(n1 + n2);
    console.log(typeof n2);
    console.log(n1 * n2);

Mas lembre-se que o parseInt() ele é um método que devolve um número inteiro, sem importar que tal número dentro da string seja um número flutuante.

    let n1 = 10;
    let n2 = parseInt('5');
    let n3 = parseInt('5.2');
    console.log(n1 + n2);
    console.log(typeof n2);
    console.log(n1 * n2);
    console.log(n3);

No exemplo acima, o n3 será um 5 e não 5.2.

Para não perdermos a tal exibição de até números flutuante, precisamos usar um outro método, parseFloat()

    let n1 = 10;
    let n2 = parseInt('5');
    let n3 = parseInt('5.2');
    let n4 = parseFloat('5.2');
    console.log(n1 + n2);
    console.log(typeof n2);
    console.log(n1 * n2);
    console.log(n3);
    console.log(n4);

E a terceira maneira, que temos para conversão de número, que é a mais fácil e não tem nenhuma distinção se é ou não número flutuante, seria o Number().

    let n1 = 10;
    let n2 = parseInt('5');
    let n3 = parseInt('5.2');
    let n4 = parseFloat('5.2');
    let n5 = Number('5');
    let n6 = Number('5.2');
    console.log(n1 + n2);
    console.log(typeof n2);
    console.log(n1 * n2);
    console.log(n3);
    console.log(n4);
    console.log(n5, n6);

Mas não vai adiantar passar uma string dentro do Number, assim como nos outros métodos acima, uma string que não seja um número como conteúdo, pois será retornado o NaN.

## Aula 15 - alert, confirm e prompt (Navegador):
Vamos aprender a utilizar algumas funções para facilitar pela frente em relação aos exercícios que estão por vir.

Para isso, vamos aprender sobre as funções alert, confirm e prompt.

Para isso, claro que vamos ter que criar arquivos htmls. No caso, vamos criar o arquivo index.html e script.js, donde esse arquivo js, será colocado dentro do diretório js que vamos criar para essa aula.

No index.html, vamos criar o arquivo padrão

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

Daí, na tag title vamos colocar "Título da página" e no body colocar o script importando o script.js

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Título da página</title>
    </head>
    <body>
        
        <script src="js/script.js"></script>
    </body>
    </html>

Agora, no script.js vamos realizar o seguinte

    alert('Com a nossa mensagem.');

Usando o Live Server, vamos abrir esse arquivo index.html no navegador.

Visto que o alert que definimos na script.js rodou, vale reforçar um ponto aqui. O alert não faz parte da linguagem JavaScript, como prova disso, se vc rodar o arquivo script.js, verá que o nodejs não reconhecerá o alert. Outro detalhe que seria legal saber, é que tais funções, tanto as que iremos aprender aqui, quanto várias delas que iremos ver adiante, podemos rodar pelo Console do navegador, Ctrl + F12.

Vamos abrir o Console do navegador do index.html, e nela vamos colocar o objeto window.

    window
    Window {window: Window, self: Window, document: document, name: '', location: Location, …}

Aparecerá algo dessa natureza.

Você consegue ver que dentro desse objeto tem muita, mas muita, coisa dentro dela. Ela, no caso, constam todos os elementos que compõe a janela que vc abriu, index.html.

No caso, o que eu quero que vc entenda com toda essa discussão? Que o alert é um tipo de atalho para o comando window.alert().

    window.alert('Mensagem')

Se tu colocar isso no Console, aparecerá a modal de alerta igual ao do que foi definido no script.js.

Temos mais duas funções que queremos falar ainda, que é o confirm e o prompt.

No caso, primeiro, vendo a funcionalidade do confirm, se rodarmos no Console o seguinte

    window.confirm('Deseja realmente pagar?');

Será exibido uma modal de em que aparecerá a msg que foi colocado dentro da função acima, só que com a diferença de que, desta vez, além do botão "ok", aparecerá o botão "cancelar", diferente do alert que tem apenas o "ok". Assim, percebe-se que quando clicamos no "ok", será retornado o valor true no Console, e se clicarmos no "cancelar" será exibido o valor false no Console.

Agora, por fim, a outra função que queremos ensinar aqui é o prompt. No caso, o promtp a funcionalidade que é acrescentada nela é que teremos uma aba em que poderemos colocar alguma informação nela, junto com os botões "ok" e "cancelar". Para testarmos basta jogar o seguinte no Console

    window.prompt('Digite o seu nome:');

Assim, ao colocarmos alguma informação dentro da caixa de msg, por exemplo o seu nome e apertarmos o "ok" no Console será exibido a informação que foi colocado. Caso vc clique em cancelar, independente de se vc colocou ou não alguma informação na caixa, aparecerá a msg null no Console

    window.prompt('Digite o seu nome:');
    'Leonardo'
    window.prompt('Digite o seu nome:');
    null

No caso, são essas três funções que queríamos te ensinar nessa aula. Especificamente, chamamo-as de funções, mas o certo é que eles são métodos, pois são funções que ficam guardadas dentro de objetos e se estiver fora do objeto é uma função.

Em todo caso, não precisamos chamar o window para executarmos tais métodos, no Console, podemos digitar diretamente os nomes dos métodos.

Outro detalhe importante, seria o seguinte. Observe o que é retornado no Console quando rodamos o alert, após clicarmos no "ok"

    alert('Mensagem')
    undefined

Esse undefined, seria pelo fato de que esse método é um tipo que não retona nada mesmo. Diferente dos outro dois métodos confirm e prompt. O que queremos dizer com isso, seria que para os métodos confirm e prompt, pelo fato de retornar algum valor, podemos capturar elas no código.

Um exemplo disso seria colocando o seguinte no Console

    const confirma = confirm('Realmente deseja apagar?');

Assim, na caixa de msg que aparecer, se clicarmos ok irá retornar undefined, mas ao jogarmos confirma no Console, vc verá que ele terá o valor true

    const confirma = confirm('Realmente deseja apagar?');
    undefined
    confirma
    true

Ou seja, a variável confirma capturou o valor que o confirm devolveu.

Vamos experimentar isso com o let.

    let confirma = confirm('Realmente deseja apagar?');

Se clicarmos em "cancelar" e colocar a variável confirma em Console, teremos o seguinte

    let confirma = confirm('Realmente deseja apagar?');
    undefined
    confirma
    false

Analogamente, isso vale para o prompt.

Agora, vamos te passar o exerício seguinte.

No script.js, vamos definir duas prompts que solicita número e quero que vc configure um alert em que mostrará o resultado da soma desses dois números.

## Aula 16 - Exercícios - Solução:
Foi feito o exercício acima.

## Aula 17 - Exercício com variáveis:
Vamos te passar um exercício. Basta acessar o diretório da aula.

## Aula 18 - Mais sobre strings:
Vamos falar mais sobre os strings.

Segue a seguintes formas que são possíveis realizar com uma string

    let umaString = 'Um texto';
    let umaString1 = 'Um "texto"';
    let umaString2 = "Um \"texto\""; // Caso vc queira usar aspas duplas e continuar usar aspas duplas.
    let umaString3 = 'Um \'texto\''; // Caso vc queira usar aspas e continuar usar aspas duplas.
    let umaString4 = 'Um \\texto'; // Caso vc quiser colocar "\" dentro do texto.
    let umaString5 = 'Um \texto'; // Isso vira um tab

    console.log(umaString);
    console.log(umaString1);
    console.log(umaString2);
    console.log(umaString3);
    console.log(umaString4);
    console.log(umaString5);

Entre outras formas possíveis.

Segue o link onde vc pode consultar mais sobre as funcionalidades das strings para vc ficar explorando

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

Podemos tbm iterar uma string como se fosse uma lista

    // O que vc consegue fazer em strings
    let umaString = 'Um texto';
    let umaString1 = 'Um "texto"';
    let umaString2 = "Um \"texto\""; // Caso vc queira usar aspas duplas e continuar usar aspas duplas.
    let umaString3 = 'Um \'texto\''; // Caso vc queira usar aspas e continuar usar aspas duplas.
    let umaString4 = 'Um \\texto'; // Caso vc quiser colocar "\" dentro do texto.
    let umaString5 = 'Um \texto'; // Isso vira um tab

    console.log(umaString);
    console.log(umaString1);
    console.log(umaString2);
    console.log(umaString3);
    console.log(umaString4);
    console.log(umaString5);

    // Podemos iterar as strings tbm como uma lista
    //              01234567 
    let umaFrase = 'Um texto';
    console.log(umaFrase[0]);
    console.log(umaFrase[4]);
    console.log(umaFrase[8]); // Irá retornar undefined, pois não existe esse elemento definido.
    console.log(umaFrase[-1]); // Também retornará undefined, não é que nem no python.

    // Método charAt
    console.log(umaFrase.charAt(0)); // Uma outra forma de consultar os elementos de cada posição.
    console.log(umaFrase.charAt(8)); // No caso anterior era retornado undefined, mas nesse caso ele irá retornar um vazio.

    // Método concat
    console.log(umaFrase.concat(' ', 'em', ' ', 'um')); // Função que concatena a String.

    // String template
    console.log(`${umaFrase} em um lindo dia.`); // String template.

    // Método indexOf
    console.log(umaFrase.indexOf('texto')); // Permite verificar se a palavra existe e em que posição ela começa
    console.log(umaFrase.indexOf('Texto')); // Visto que a palavra não existe será retornado -1.
    console.log(umaFrase.indexOf('Um', 3)); // Quando colocamos uma String primeiro e no segundo parâmetro um número, estamos perguntando se a tal palavra está exatamente ou depois desse índice. Claro que, nesse caso não, então irá retornar -1.
    console.log(umaFrase.indexOf('o', 3)); // Nesse caso irá retornar sim, que é o 7, a posição onde se encontra a palavra "o".
    console.log(umaFrase.indexOf('x', 6)); // Irá retornar -1, pois essa palavra se encontra antes dessa posição.

    // Método lastIndexOf
    console.log(umaFrase.lastIndexOf('o')); // No caso, esse método ele faz o indexOf, mas de trás para frente.
    console.log(umaFrase.lastIndexOf('o', 3)); // Nesse caso aqui, o segundo parâmetro serve para começar a partir da posição dele, mas como ela irá analisar de trás para frente, então irá analisar as posições menores e iguais ao valor colocado. Nesse caso, como a palavra não existe nessa posição e nem menos depois dela, será devolvido -1.
    console.log(umaFrase.lastIndexOf('m', 3)); // Nesse caso aqui, será retornado a posição em que o "m" se encontra.

    // Método match
    console.log(umaFrase.match(/[a-z]/g)); // Ela irá retornar uma lista de expressão regulares, ou seja, irá retornar uma lista de todas as letras minúsculas desse texto.
    console.log(umaFrase.match(/[a-z]/)); // Aplicando sem a flag "g", ela irá retornar o seguinte: [ 'm', index: 1, input: 'Um texto', groups: undefined ]

    // Método search
    console.log(umaFrase.search(/[a-z]/)); // Isso irá retornar o índice em que foi encontrado.
    console.log(umaFrase.search(/[a-z]/g)); // Aqui, no caso, tanto faz ter a flag "g" ou não, serão retornados o valor 1.
    console.log(umaFrase.search(/x/)); // Aqui, no caso, estou realmente consultando a posição que se encontra a letra x, que é 5.

    // Método replace
    console.log(umaFrase.replace('Um', 'Outra')); // Aqui estará substituindo a palavra "Um" para palavra "Outra".
    console.log(umaFrase.replace(/Um/, 'Outra')); // Fazendo a mesma coisa utilizando a expressão regular.

Obs: Existe um curso sobre expressões regulares (match, search e replace), pois esse assunto é muito complexo e tem muito conteúdo.

    let umaFrase1 = 'O rato roeu a roupa do rei de roma';
    console.log(umaFrase1.replace(/r/, '#')); // Note que, só foi sustituído apenas o primeiro "r" que aparece na iteração.
    console.log(umaFrase1.replace(/r/g, '#')); // Se vc quiser que isso aconteça para todos os r's, vc terá que acrescentar a flag "g".

    // Método lenght
    console.log(umaFrase1.length); // Irá retornar o comprimento da string, mas no sentido um conjunto natural que mostra n valores, ou seja, n = {n-1, n-2, ..., 2, 1, 0}.
    console.log(umaFrase.length);

    // Método slice
    console.log(umaFrase1.slice(2, 6)); // No caso, o slice, como o nome já disse, ele pega uma fatia da string. No caso, o primero parâmetro vc diz a posição em que começa e o segundo parâmetro a posição em que termina, no índice antecessor. No caso, na aplicação (2,6), será pego exatamente a partir da posição 2 e irá até o 5.
    console.log(umaFrase1.slice(-3)); // Já aqui é possível realizar uma fatia inversa, especificando com índice negativo mesmo. A contagem negativo vai de -1 por trás. Ou seja, -1 seria a partir de "a", visto que a frase termina em "roma", e assim o -2  seria o "m", sucessivamente.
    console.log(umaFrase1.slice(31)); // Se colocarmos apenas um parâmetro, sigifica que estamos fatiando a paritr da exata posição pela frente.
    console.log(umaFrase1.slice(-1));
    console.log(umaFrase1.slice(-4, -1)); // Ou seja, o -1 não foi considerado de trás para frente.
    console.log(umaFrase1.slice(-4));

    // Método substring
    console.log(umaFrase1.substring(umaFrase.length - 4, umaFrase.length - 1)); // Substring é o mesmo que o slice.

    // Método split
    console.log(umaFrase1.split(' ')); // Essa eu uso direto!
    console.log(umaFrase1.split('r'));
    console.log(umaFrase1.split(' ', 2)); // O segundo parâmetro ele indica até quantas vezes vc quer que seja feito o split em relação ao primeiro parâmetro.

    // Método toUpperCase e toLowerCase
    console.log(umaFrase1.toLowerCase);
    console.log(umaFrase1.toUpperCase);

Para mais detalhes em aprender sobre os métodos que temos para string recomendamos as seguintes referências:

- https://www.w3schools.com/js/js_string_methods.asp

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

- https://www.ecma-international.org/publications-and-standards/standards/ecma-262/


## Aula 19 - Exercícios com strings:
Vamos usar o arquivo perguntas.html e nela realizar os exercícios.

No caso, nesse arquivo perguntas.html, nela, consta a estrutura padrão do arquivo html e dentro do body temos o script, donde podemos definir a tag script e dentro dessa tag definimos uma constante. Além disso, queremos definir as ações que serão usadas e, em seguida, exibir tais ações. Para isso, estamos usando o document.body.innerHTML o que indica o que queremos exibir dentro do arquivo html, especificamente, dentro da tag body.

Lembrando que o document.body.innerHTML sempre que usamos o símbolo "=", atribuição, ela irá substituir o conteúdo no lugar que possívelmente já estaria nela. Para evitarmos isso, vamos ter que usar "+=" que é de incremento com atribuição, de forma que concatenamos as novas informações junto com as outras já atribuídas.

Agora, para responder os exercícios, visto que estamos usando a crase, então iremos usar o string template para conseguirmos responder os exercícios.

## Aula 20 - Mais sobre numbers:
Vamos aprender mais sobre numbers.

Vimos, até agora, que com o número podemos realizar operações aritméticas. Dentro das operações aritméticas, uma delas que tem uma propriedade curiosa é "+".

    let num1 = 1;
    let num2 = 2.5;

    console.log(num1 + num2);

No caso, se quiermos então que tal soma acima se torne uma via de concatenação? Existe um recurso que possibilita isso que é o toString().

    let num1 = 1;
    let num2 = 2.5;

    console.log(num1 + num2);

    // toString()
    console.log(num1.toString() + num2);

Assim, rodando isso teremos o seguinte:

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula20-Mais-sobre-numbers/index.js"
    3.5
    12.5

Daí, nada de surpresa, como já vimos antes, quando somamos uma string com um número, esse número vira uma string e, então, a soma se torna uma concatenação.

Lembrando que esse método .toString() não transforma o num1 em uma string. Ele só aplica a conversão no instante em que é chamado. Como prova disso, se analisarmo o tipo do num1 teremos o seguinte

    let num1 = 1;
    let num2 = 2.5;

    console.log(num1 + num2);

    // toString()
    console.log(num1.toString() + num2);
    console.log(typeof num1);

Rodando o código acima teremos

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula20-Mais-sobre-numbers/index.js"
    3.5
    12.5
    number

Note que, o num1 continua um número, pois o método .toString foi aplicado em um instante, apenas.

Temos uma outra funcionalidade que temos para o toString, que seria transformar os números em binários, como segue

    // Transformando um núemro em binário usando o toString
    let num3 = 1500;

    console.log(num3.toString(2));

Se rodarmos esse código, teremos o seguinte retorno

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula20-Mais-sobre-numbers/index.js"
    10111011100

Agora, temos tbm um recurso de arredondamento para números tbm que é o toFixed

    // toFixed arredondamento
    let num4 = 10.545154841618915156;

    console.log(num4.toFixed(2));
    console.log(num4.toFixed(3));
    console.log(num4.toFixed(4));

Se rodarmos o código acima teremos

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula20-Mais-sobre-numbers/index.js"
    10.55
    10.545
    10.5452

Agora, tem momentos em que queremos saber se um número é ou não inteiro. Para isso, temos o seguinte

    // Conferindo se um núemro é inteirou ou não
    let num5 = 10;
    let num6 = 2.5;

    console.log(Number.isInteger(num5));
    console.log(Number.isInteger(num6));

Se rodarmos o código acima, será retornado um valor booleano

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula20-Mais-sobre-numbers/index.js"
    true
    false

Agora, vamos aprender a conferir se um dado é ou não um número. Sabemos que, como um dos exemplos clássicos, se multiplicamos um número com uma string, será devolvido um NaN (Not a Number). Assim, como existem outros casos em que isso ocorre. Para isso, existe uma maneira de descobrirmos se tal dado é ou não um número. Para isso basta fazermos o seguinte

    // Confeirndo se é NaN ou não
    let num7 = 2;
    let temp = num7 * 'Hello';

    console.log(Number.isNaN(temp));
    console.log(Number.isNaN(num7));

Isso irá devolver o seguinte, em valores booleanos

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula20-Mais-sobre-numbers/index.js"
    true
    false

As contas em JavaScript, quando é lidado com a imprecisão existe um padrão que lhe é seguido que é IEEE 754-2008

    // IEEE 754-2008
    // Padrão de imprecisão com números em JavaScript
    let num8 = 0.7;
    let num9 = 0.1;

    console.log(num8 + num9);

    num8 += num9;

    console.log(num8);

Ao rodarmos esse código acima teremos o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula20-Mais-sobre-numbers/index.js"
    0.7999999999999999
    0.7999999999999999

Note que, ele tenta represetar uma dízima periódica.

No caso, se quisermos somar ao 0.7 o 0.1 três vezes esperado que ela nos forneça um número 1.

    // IEEE 754-2008
    // Padrão de imprecisão com números em JavaScript
    let num8 = 0.7;
    let num9 = 0.1;

    console.log(num8 + num9);

    num8 += num9;

    console.log(num8);

    num8 += num9;
    num8 += num9;

    console.log(num8);

O resultado do último console será

    0.9999999999999999

Mas, note que, há uma imprecisão aqui, que é o JavaScript tentando representar uma dízima periódica truncada e ela não devolveu o número 1 que esperávamos que seja devolvido perante a essa soma.

Uma das formas de resolvermos isso seria usando o toFixed para arredondamento

    num8 = num8.toFixed(2);

    console.log(num8);

E esse código irá devolver o seguinte

    1.00

Mas aí vem a pergunta. Resolvemos mesmo o problema?? Esse número ele se tornou mesmo um inteiro?? PAra verificarmos isso já sabemos como

    num8 = num8.toFixed(2);

    console.log(num8);
    console.log(Number.isInteger(num8));

Daí, será retornado o seguinte

    false

Ou seja, isso não resolveu o nosso problema. Uma observação importante é que acima deu a entender que analisamos se o número 1.00 é inteiro ou não, mas olha só o seguinte

    console.log(Number.isInteger(1.00));

Isso irá retornar um true, ou seja, o JavaSript reconhece o 1.00 como um núemro inteiro. Então, o que está acontecendo aqui??

A resposta para isso está em como o método isIntteger está realizando a checagem do número inteiro. Ele usa o método binário. Isso significa que o num8, mesmo usado o toFixed(2), ele não vira um inteiro, pois o isInteger, na hora de usar o binário para conferir se é ou não um número inteiro ele não consegue por ver que existe números decimais depois disso.

Então, para resolver, de fato, o problemma precisaria realizar o seguinte

    let num10 = 0.7;

    num10 += num9;
    num10 += num9;
    num10 += num9;

    num10 = parseFloat(num10.toFixed(2));
    // ou num10 = Number(num10.toFixed(2));

    console.log(Number.isInteger(num10));

Como prova disso, se rodarmos teremos o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula20-Mais-sobre-numbers/index.js"
    1
    true

Para sabermos melhor sobre IEEE 754-2008 seguite o seguinte link

    https://stackoverflow.com/questions/55280847/floating-point-number-in-javascript-ieee-754

    https://stackoverflow.com/questions/42181795/is-ieee-754-2008-deterministic

    https://2ality.com/2012/04/number-encoding.html

Existe uma outra forma, só que mais trabalhosa, de resolver esse problema de se é ou não um número inteiro. No caso, bastaríamos converter os números fracionários em inteiros multiplicando na base 10 e depois voltarmos dividindo o mesmo pela base 10

    // Outra forma de resolver
    let num11 = 0.7;
    let num12 = 0.1;

    num11 = ((num11 * 100) + (num12 * 100)) / 100;
    num11 = ((num11 * 100) + (num12 * 100)) / 100;
    num11 = ((num11 * 100) + (num12 * 100)) / 100;

    console.log(num11);
    console.log(Number.isInteger(num11));

Ao rodarmos o código teremos o seguinte

    1
    true

## Aula 21 - Objeto Math:
Vamos aprender a usar um pouco do objeto chamado Math, donde tem inúmeros recursos relacionados às ferramentas matemáticas.

Então, vamos começando com seguinte no arquivo index.js do diretório dessa aula, o arredondamento

    let num1 = 9.54578;
    let num2 = Math.floor(num1);

    console.log(num1);
    console.log(num2);

Rodando o código acima, vamos ter o seguinte resultado

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula21-Objecto-Math/index.js"
    9.54578
    9

Note que, o método floor do objeto Math, ele arredondou o valor 9 para baixo, ou seja, truncou os números decimais.

Agora, temos, tbm, uma forma de arredondar para cima, que é usando o método ceil que temos no objeto Math

    // Arredondando para cima
    let num3 = 9.54578;
    let num4 = Math.ceil(num3);

    console.log(num3);
    console.log(num4);

Rodando o código acima, teremos o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula21-Objecto-Math/index.js"
    9.54578
    10

Note que, o arredondamento ocorreu para cima.

Em ambos os métodos de arredondamento acima, foram ignorados os números decimais.

Outra forma de arredondamento, seria usando o método round

    // Round - Arredondamento
    let num5 = 9.54578;
    let num6 = Math.round(num5);

    let num7 = 9.44578;
    let num8 = Math.round(num7);

    console.log(num5);
    console.log(num6);

    console.log(num7);
    console.log(num8);

Rodando o código acima, teremos o seguinte retorno pelo terminal

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula21-Objecto-Math/index.js"
    9.54578
    10
    9.44578
    9

Ou seja, esse método ele arredonda conforme a regra básica de arredondamento que aprendemos no fundamental.

Agora, temos o conceito de pegar o máximo que é muito comum se encontrar na matemática, quando vc quer obter um valor máximo de um conjunto de números finitos (se for infinito precisaria de uma propriedade topológica de compacidade)

    // Pegando o máximo de um conjunto
    console.log(Math.max(1,2,3,-10,8,2301));

Daí, será retornado o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula21-Objecto-Math/index.js"
    2301

O mesmo vale para caso eu queira o menor número

    // Pegando o mínimo de um conjunto
    console.log(Math.min(1,2,3,-10,8,2301));

Rodando o código acima teremos o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula21-Objecto-Math/index.js"
    -10

Como esperávamos, ele retornou o menor número desse conjunto.

Outro método que esse objeto tem, é o método randômico, que seria retornar algum número aleatório dentro do intervalo [0,1]

    // Random
    console.log(Math.random());

Quando rodamos o código acima, será retornado algo do tipo

    0.21015798836250976

No caso, não significa que sempre será o número de cima que será retornado por esse método. A cada vez que vc vai acionando esse método, será retornado tipos de números diferentes dentro do intervalo [0,1], de forma aleatório (pseudo-aleatório no caso).

Temos também, o número PI definido nela

    // Pi
    console.log(Math.PI);

Que é retornado o seguinte

    3.141592653589793

Temos também o método de potenciação, usando o .pow()

    // Potenciação
    console.log(Math.pow(2,10)); // 2^10
    console.log(2 ** 10); // é a mesma coisa

A expressão acima indica 2 elevaod à 10.

Temos também o método que tira a raíz quadrada de um número, sqrt()

    // Raíz quadrada
    console.log(Math.sqrt(9));
    console.log(Math.sqrt(5));
    console.log(Math.sqrt(3));

Rodando o código será retornado o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula21-Objecto-Math/index.js"
    3
    2.23606797749979
    1.7320508075688772

Agora, temos um recurso em JavaScript que, em outras linguagens de programação, no geral, daria errado, mas aqui ela devolve um valor, que é quando uma conta dá um infinito

    // Inifinito
    console.log(100/0);

Isso será retornado no terminal o seguinte

    leonardo@leonardo-Dell-G15-5520:~/Documentos/estudos/Review-JavaScript-Master$ node "/home/leonardo/Documentos/estudos/Review-JavaScript-Master/JavaScript-Curso-Udemy/secao02-JavaScript-Basico-Para-Iniciantes/Aula21-Objecto-Math/index.js"
    Infinity

O legal é que podemos gerar o infinito de forma mais manual tbm colocando um número muito, mas muito, grande

    console.log(100/0);
    console.log(100/0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);

## Aula 22 - Exercícios com numbers e Math:
Vamos praticar os métodos que apresentamos na aula passada.

Para isso, vamos criar dois arquivos index.html e script.js, donde criamos um diretórioooo js dentro do diretório dessa aula, dentro dela colocamos esse arquivo.

No arquivo index.html colocamos o seguinte

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercícios</title>
    </head>
    <body>
        <section>
            <h1>O número colocado é <span id="numero-titulo"></span></h1>
            <div id="texto"></div>
        </section>

        <script src="js/script.js">
            
        </script>
    </body>
    </html>

Daí, no script.js colocamos o seguinte

    const numero = prompt('Digite um número:');
    const numeroTitulo = document.getElementById('numero-titulo');
    const texto = document.getElementById('texto');

O legal do document.getElementById ele consegue selecionar o id da tag onde está presente. Para vc conseguir ver qual tag que o document.getElementById ele pegou, bastaria vc entrar no console da página e digitar o nome do const que vc definiu que assim ele irá retornar a tag html em que o document.getElementById ele está considerando.

    numeroTitulo
    <span id=​"numero-titulo">​</span>​

Como podemos ver aqui.

Agora, no arquivo script.js, visto que estamos conseguindo selecionar as tags da html, vamos ter que definir as questões usando o document.body.innerHTML, mas, desta vez, direcionado para as tags que tem o id e que consideramos pelo document.getElementById

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


## Aula 23 - Arrays (Básico):
Vamos aprender os coneitos básicos de Arrays (Matriz).

Obs: Tenta pegar todos os meus códigos pythons voltado para matriz, tente criar toda a teoria de álgebra linear que aprendi usando Arrays!!

Vamos começar aqui. No caso, o array é uma lista, ou melhor, daria para interpretar como um matriz que ao mesmo tempo daria para manipular como uma lista de documentos e dados para serem guardadas.

Basicamente, vc consegue colocar o que quiser dentro de uma lista

    const alunos = ['Leonardo', 'Luiz', 'João', 1, true, {Estado: 'SP'}, function() { return 'Hello WounderWorld'}, null, undefined];

    console.log(alunos);

No caso, uma boa prática de arrays, por ela ter essa característica de poder colocar quaisquer informações, seria sempre tentar manter as informações de forma conscisa.

Da mesma forma que as strings, nos estudos anteriores, cada caractere que compõe uma string é indexado, os arrays, também, são para os seus respectivos elementos (Ficaria mais fácil pensar na definição de uma sequência matemática).

    const alunos = ['Leonardo', 'Luiz', 'João', 1, true, {Estado: 'SP'}, function() { return 'Hello WounderWorld'}, null, undefined];

    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[2]);
    console.log(alunos[6]());

Uma forma de editar os dados de um array, é o mesmo quando vc edita os dados da variavel let. No caso, se vc quiser editar bastaria fazer o seguinte

    const alunos = ['Leonardo', 'Luiz', 'João', 1, true, {Estado: 'SP'}, function() { return 'Hello WounderWorld'}, null, undefined];

    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[2]);
    console.log(alunos[6]());

    alunos[2] = 'Newton';

    console.log(alunos);
    console.log(alunos[2]);

Note que, temos uma coisa bem curiosa acontecendo aqui. Quando declaramos a variável alunos usando o const, aprendemos no passado que um valor atribuído para o const ele não pode ser alterado. Mas, se prestarmos mais a atenção para qual tipo de dado essa regra do const se aplicava? Para dados primários! No caso, o array, como podemos ver, ele não é um dado primário, mas, sim, um dado direcionado. O que permite que, o dado array em si que é um objeto, não pode ser trocado para algum outro dado, mas os elementos que compõe esse dado array, permite alterações.

Se, por exemplo, o índice não existir, então ela será criado, como seguinte

    // Inserindo elemento em um índice que não existe
    const indiceNovo = ['Leonardo', 'Marcos', 'João'];

    console.log(indiceNovo);

    indiceNovo[5] = 'Luiz';

    console.log(indiceNovo);

Podemos, também, saber o tamanho do array

    // Dá o tamanho do array
    console.log(alunos.length);

Da mesma, forma, podemos colocar um novo elemento no último da lista

    // Inserindo elemento no último da lista
    alunos[alunos.length] = 'Eduardo';
    alunos[alunos.length] = 'Max';
    alunos[alunos.length] = 'Einstein';
    console.log(alunos);

    alunos.push('Lucas');
    console.log(alunos);

Vale ressaltar aqui, que a indexação de array, assim como na string, ela obedece o conjunto dos naturais de n comprimento, sendo que n = {0, 1, 2, ..., n-2, n-1}.

Agora, se queremos adicionar um novo elemento no primeiro lugar da lista, bastaria usar o unshift

    // Adicionando no primeiro lugar na lista
    alunos.unshift('Primeiro lugar');

    console.log(alunos);

Agora, podemos também, excluir o elemento da lista pelo último, usando o pop

    // Excluindo o elemento pelo último
    alunos.pop();

    console.log(alunos);

O legal tbm é que esse método ele permite ser guardado em uma variável o que foi removido

    // Excluindo o elemento pelo último
    const removido = alunos.pop();

    console.log(removido);
    console.log(alunos);

Da mesma, forma que temos o método que remove do final, temos, tbm, método que remove do iníco que é o shift

    // Remove do início
    const removeInicio = alunos.shift();

    console.log(removeInicio);
    console.log(alunos);

E, claro, temos também uma forma de apagar um dado elemento de uma lista especificando o índice dela

    // Apagando um elemento pelo índice
    console.log(alunos[5]);
    delete alunos[5];

    console.log(alunos);

No caso, no indice em que antes existia o elemento, agora ela ficará vazio, se vc verificar o que será retornado pelo terminal.

Claro, se pedirmos para exibir um índice de uma lista que não está definido, o JavaScript retornará undefined

    // Pedindo para exibir um índice inexistente
    console.log(alunos[1000]);

Podemos entender que é uma função injetora de vai dessa lista, alunos, o conjuntos dos naturais e que no contradomínio, o valor 1000 não existe um elemento da lista que corresponda.

Podemos, também, fatiar a lista usando o método slice

    // Fateando a lista
    console.log(alunos.slice(0,7));

No caso, note que, quando colocamos o intervalo, o segundo indice será considerado o antecessor dela o intervalo de fateamento.

Da mesma forma que, se vc quiser fatiar até o último elemento da lista, teríamos que colocar o comprimento inteiro da lista como o segundo parâmetro

    // Fatiando a lista
    console.log(alunos.slice(0,7));
    console.log(alunos.slice(0,alunos.length));

Podemos, também, usar o número negativo. No caso, a contagem do intervalo, em vez de ser de 0 pela frente, será do último para o início

    // Fatiando a lista
    console.log(alunos.slice(0,7));
    console.log(alunos.slice(0,alunos.length));
    console.log(alunos.slice(0,-1));
    console.log(alunos.slice(0,-2));

Lembre-se, um array é um objeto, mesmo ele tendo a funcionalidade de lista. No caso, temos dois tipos de objetos o array e o objeto que é representado por duas chaves, {}. Em ambos os casos, se vc conferir o tipo, ele retornará um objeto.

    // Tipo
    console.log(typeof alunos);
    console.log(typeof {});

No caso, como, então, vamos conseguir distinguir entre objeto e um array?? Podemos usar o instanceof

    // Tipo
    console.log(typeof alunos);
    console.log(typeof {});

    console.log(alunos instanceof Array);
    console.log({} instanceof Array);

    console.log(alunos instanceof Object);
    console.log({} instanceof Object);

## Aula 24 - Const com valores mutáveis:

## Aula 25 - Funções (Básico):

## Aula 26 - Objetos (Básico):

## Aula 27 - Valores primitivos e valores por referência: 

## Aula 28 - Exercício para função, array e objetos:
