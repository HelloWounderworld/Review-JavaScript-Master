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

setTimeout(function () {
    console.log('Hello WounderWorld!');
}, 5000);
