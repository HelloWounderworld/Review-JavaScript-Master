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
Vamos aprender a mesclaro arquivo HTML com o arquivo JavaScript.

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

## Aula 08 - Constantes com const:

## Aula 09 - Correção:

## Aula 10 - Exercícios - Const e Let:

## Aula 11 - Código do exercício solucionado:

## Aula 12 - Let vs Var - Primeira diferença:

## Aula 13 - Tipos de dados primitivos:

## Aula 14 - Operadores aritméticos, de atribuição e incremento:

## Aula 15 - alert, confirm e prompt (Navegador):

## Aula 16 - Exercícios - Solução:

## Aula 17 - Exercício com variáveis:

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
