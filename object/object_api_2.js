/*

    preventExtensions, seal e freeze

    preventExtensions - Impede que o objeto tenha novas propriedades, mas permite modificar ou remover as propriedades existentes.

    seal - Impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite modificar propriedades existentes.

    freeze - Impede que o objeto tenha novas propriedades, apague ou modifique prpriedades existentes.

*/

const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "00 and Functional"
}

// Object.preventExtensions(javascript);


// javascript.name = "ECMAScript";
// javascript.author = "Nelson"
// delete javascript.name;

// console.log(javascript);
// console.log(Object.isExtensible(javascript));


// Object.seal(javascript);

// javascript.name = "ECMAScript";
// javascript.author = "Nelson"
// delete javascript.name;

// console.log(javascript);
// console.log(Object.isSealed(javascript));


Object.freeze(javascript);

javascript.name = "ECMAScript";
javascript.author = "Nelson"
delete javascript.name;

console.log(javascript);
console.log(Object.isFrozen(javascript));