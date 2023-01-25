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
Vamos te passar um exercício.

## Aula 18 - Mais sobre strings:

## Aula 19 - Exercícios com strings:

## Aula 20 - Mais sobre numbers:

## Aula 21 - Objeto Math:

## Aula 22 - Exercícios com numbers e Math:

## Aula 23 - Arrays (Básico):

## Aula 24 - Const com valores mutáveis:

## Aula 25 - Funções (Básico):

## Aula 26 - Objetos (Básico):

## Aula 27 - Valores primitivos e valores por referência: 

## Aula 28 - Exercício para função, array e objetos:
