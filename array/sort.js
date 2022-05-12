/*
    Os mutator methods quando invocados modificam o array

    * push: Adiciona um elemnto no final.
    * pop: Remove um elemento do final.
    * unshift: Adiciona um elemnto no inicio.
    * shift: Remove um elemento do inicio.
    * splice: Remove, subtitui ou adiciona um ou mais elementos em uma determinada posição.
    * sort: Ordena os elementos de acordo com a função de ordenação.
    * reverse: Inverte a ordem dos elementos.
    * fill: Preenche os elementos de acordo com a posição de inicio e fim.

*/

const language = [
    {
        name: 'Python', 
        year: 1991
    },
    {
        name: 'C', 
        year: 1972
    },
    {
        name: 'Java', 
        year: 1995
    }
]

language.sort(function(a, b) {
    return b.name.localeCompare(a.name)
})

// language.sort(function(a, b) {
//     return (b.name <= a.name) ? -1 : 1;
// })

// language.sort(function(a, b) {
//     return a.year - b.year;
// })

console.log(language);