/*
Uma função é um objeto que contém um bloco de código executavél

*/

// function sum(a, b){  //function declaration
//     return a + b;
// }


// const sum = function(a, b) { // function expression
//     return a+ b;
// }

/*
Diferençãs: a funções declarativas, não precisar ser executadas em um odem lineal, já que elas sofrem o hosting 

já para as funções expression o ordem de executadas dependen sim de um ordem lineal
*/


// console.log(sum(2, 2));

/*
Na linguagem JavaScript, as funões são de primeira classe, ou seja, podem ser atribuídas a uma variável, passadas por parãmetro ou serem retornada de uma outra função;
*/

// const sum = function sum(a, b){  
//     return a + b;
// };

// const subtract = function sum(a, b){  
//     return a - b;
// };

// const calculator = function(fn) {
//     return function(a,b) {
//         return fn(a, b);
//     };
// };

// console.log(calculator(sum)(2,2));
// console.log(calculator(subtract)(2,2));


// console.log(sum(2, 2));
// console.log(subtract(2, 2));

/*
É possível invocar uma função com menos ou mais parâmetros, não necessariamente seguindo o que está declarado

*/

// const sum = function sum(a, b){  
//     return a + b;
// };

// console.log(sum(2,2))
// console.log(sum(5))
// console.log(sum(1,2,3))

/*
Podemos definir valores padrão para cada um dos parãmetros de uma função

*/


// const sum = function sum(a = 1, b = 1){  
//     return a + b;
// };

// console.log(sum(2,2))
// console.log(sum(5))
// console.log(sum())

/*

Por medio da variável implícita arguments é possível acessar os praãmetros da função invocada.

*/


// const sum = function(){  
//     let total = 0;
//     for(let argument in arguments){
//         total += arguments[argument]
//     }
//     return total;
// };
// console.log(sum(1,2,3,4,5,6,7,8,9));

/*

Também é possóvel acessar os parâmetros da função invocada por meio do rest parameter

*/


const sum = function(...numbers){  
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));