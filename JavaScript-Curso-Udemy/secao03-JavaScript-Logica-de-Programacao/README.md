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

## Aula 07 - if, else if e else (2):

## Aula 08 - Modelo HTML e CSS para exercícios posteriores:

## Aula 09 - Nota sobre o próximo exercício:

## Aula 10 - Exercício (unindo tudo aprendido até aqui e mais):

## Aula 11 - Operação ternária:

## Aula 12 - Objeto Date:

## Aula 13 - Switch/Case:

## Aula 14 - Exercício com switch e date:

## Aula 15 - Mais diferenças entre var e let/const:

## Aula 16 - Atribuição via desestruturação (Arrays):

## Aula 17 - Atribuição via desestruturação (Objetos):

## Aula 18 - For - Clássico - Estrutura de repetição:

## Aula 19 - Exercícios com for:

## Aula 20 - DOM e a árvore do DOM:

## Aula 21 - For in - Estrutura de repetição:

## Aula 22 - For of - Estrutura de repetição:

## Aula 23 - Exercícios com NodeList (Browser):

## Aula 24 - While e Do While - Estrutura de repetição:

## Aula 25 - Break e Continue:

## Aula 26 - Exercício com lógica de programação - 01:

## Aula 27 - Exercício com lógica de programação - 02:

## Aula 28 - Exercício com lógica de programação - 03:

## Aula 29 - Tratando e lançando erros (try, catch, throw):

## Aula 30 - Tratando e lançando erros (try, catch, finally):

## Aula 31 - setInterval e setTimeout:

## Aula 32 - Exercício - Criando um timer com setInterval:

## Aula 33 - Criando uma Lista de tarefas:
