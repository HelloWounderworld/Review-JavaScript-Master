// Revisão - Testando método
// Usando um objeto e uma função, vamos aprender a criar um método.
let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];
// console.log(points[1].x - points[0].x);

// Criando o método
// A palavra-chave "this" se refere ao objeto no qual o método é definido: nesse caso, o array de pontos anterior.
points.dist = function() {
  console.log('Me mostre o que está dentro de this: ', this);
  let p1 = this[0];
  let p2 = this[1];
  let a = p2.x-p1.x;
  let b = p2.y-p1.y;
  return Math.sqrt(a*a + b*b);  
};
console.log(points.dist());