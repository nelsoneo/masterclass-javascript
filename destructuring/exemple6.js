/*
    Podemos aplicar destructuring também nos parâmetros de uma função, tanto com arrays quanto com objetos
*/

// const sum = function sum(a, b){
//     return a + b;
// }

// console.log(sum(2, 3));

// const sum = function sum([a, b]){
//     return a + b;
// }

// console.log(sum([2, 3]));

const sum = function sum({a, b}){
    return a + b;
}

console.log(sum({a: 2, b: 3}));