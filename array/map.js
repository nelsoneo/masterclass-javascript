/*
    Os iteratoin methods quando invocados iteram sobre os elementos do array

    * forEach: Executa a função passada por parâmetro para cada elemento.
    * filter: Retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmetro.
    * find: Retorna o primeiro elementos que retornou true na função passada por parâmetro.
    * some: Retorna ture se um ou mais elementos retornam true na função passada por parâmetro.
    * every: Retorna true se todos os elementos retornam true na função passada por parâmetro.
    * map: Retorna un novo array com base no retorno da função passada por parâmtro.
    * reduce: Retorna um valor com base no retorno da função passada por parâmtro.

*/


const frameworks = [
    {
        name: 'Angular.js',
        contributors: 1548
    },
    {
        name: 'Ember.js',
        contributors: 746
    },
    {
        name: 'Vue.js',
        contributors: 240
    }
]

const result = frameworks.map((item) => item.name)
console.log(result);