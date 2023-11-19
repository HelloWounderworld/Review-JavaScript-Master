const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// Serve para conseguir pegar os estilos css que foram aplicados.
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

// console.log(backgroundColorBody);

for (let p of ps) {
    // console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}
