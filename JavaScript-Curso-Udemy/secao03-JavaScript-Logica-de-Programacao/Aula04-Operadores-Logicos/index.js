const num1 = 11;
const num2 = 10;
const lista = ['Leonardo', function() {}];
console.log(typeof lista[1]);
console.log(num1 > num2 && typeof(lista[0]) === typeof('') && typeof(lista[1]) === typeof(function() {}));
console.log(num1 > num2 && typeof(lista[0]) === typeof('') && typeof(lista[1]) === typeof({}));

console.log(num1 > num2 || typeof(lista[0]) === typeof('') || typeof(lista[1]) === typeof({}));
