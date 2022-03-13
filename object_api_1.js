/*
    defineProperty

    configurable - Permite que uma determinada propriedade seja apagada.
    enumerable - Permite que uma determinada propriedade seja enumerada.
    value - Define o valor de uma determinada propriedade.
    writable - Permite que uma determinada propriedade tenha seu valor modificado.

*/

// const javascript = {};
// Object.defineProperty(javascript, "name", {
//     value: "JavaScript"
// });

// console.log(javascript);
// console.log(javascript.name);


// const javascript = {};
// Object.defineProperty(javascript, "name", {
//     enumerable: true,
//     value: "JavaScript"
// });

// console.log(javascript);
// console.log(javascript.name);

// const javascript = {};
// Object.defineProperty(javascript, "name", {
//     enumerable: true,
//     value: "JavaScript",
//     writable: true,
// });

// javascript.name = "ECMAScript"
// console.log(javascript);
// console.log(javascript.name);

const javascript = {};
Object.defineProperty(javascript, "name", {
    configurable: true,
    enumerable: true,
    value: "JavaScript",
    writable: true,
});

delete javascript.name ;
console.log(javascript);
