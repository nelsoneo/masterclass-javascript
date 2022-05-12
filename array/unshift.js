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

const language = ['Python', 'JavaScript', 'Java'];

console.log(language);
console.log(language.unshift('Ruby')); // unshift retorna o lengt 'tamanho' do array