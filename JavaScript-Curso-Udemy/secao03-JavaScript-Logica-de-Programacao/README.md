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
