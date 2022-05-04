//  O principal objetivo da herança é permitir o reuso de código por meio do compartilhamento de propriedades entre objetos, evitando a duplicação

// A propriedade __proto__ é uma referência para o protótipo do objeto.

// O método hasOwnProperty pode ser utilizado para determinar se uma proprieade pertenece ao objeto.

// Os métodos Object.setPrototypeOf e Object.getPrototypeOf permitem a interação com o protótipo do objeto.

// Com o método Object.create é possível criar um objeto passando o seu protótipo por parâmetro.

// Caso a mesma proriedade exista no objeto e no seu protótipo, a propriedade do própio objeto é retornada, fazendo sombra á propriedade do protótipo. 

const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = Object.create(functionalLanguage);
scheme.name= "Scheme";
scheme.year= 1975;
    // __proto__: functionalLanguage

// Object.setPrototypeOf(scheme, functionalLanguage);

const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year= 1985;
javascript.paradigm = "00";
    // __proto__: functionalLanguage

// Object.setPrototypeOf(javascript, functionalLanguage);

// for(let key in scheme){
//     console.log(key, scheme.hasOwnProperty(key));
// }

// for(let key in javascript){
//     console.log(key, javascript[key]);
// }

console.log(javascript);
console.log(javascript.paradigm);
console.log(javascript.__proto__.paradigm);
console.log(Object.getPrototypeOf(javascript).paradigm);