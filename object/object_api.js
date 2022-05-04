/*

    O método Object.assign faz a cópia das propriedades dos objetos passados por parâmetros para o objeto alvo, que é retornado.

    O método Object.keys retorna as chaves das propriedades do objeto.

    O método Object.values retorna os valores das propriedades do objeto.

    O método Object.entries retorna as propriedades do objeto em pares de chave e valor.

    O método Object.is compara dois objetos, considerando os tipos de dados, de forma similar ao operador ===

*/


// const javascript = Object.create({});

// Object.assign(javascript, {
//     name: "JavaScript",
//     year: 1995,
//     paradigm: "00 and Functional"
// }, {
//     author: "Brendan Eich",
//     influenceBy: "Java, Scheme and Self"
// });

const javascript =  {
    name: "JavaScript",
    year: 1995,
    paradigm: "00 and Functional"
};

// console.log(Object.keys(javascript));
// console.log(Object.values(javascript));
// console.log(Object.entries(javascript));
console.log(Object.is(javascript, javascript));