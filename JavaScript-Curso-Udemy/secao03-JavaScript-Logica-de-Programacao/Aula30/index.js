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

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        // console.log('Não é');
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    // const hora = retornaHora(11);
    const hora = retornaHora(data);

    console.log(hora);
} catch(e) {
    // console.log(e);
    console.log('Trata o erro');
} finally {
    console.log('Tenha um bom dia');
}
