/*
Um map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dado.

properties:

* - size: Retorna a quantidade de elements.
* - set: Adiciona um par de chaves e valor.
* - forEach: Itera sobre o map.
* - has: Returna true se a chave existir.
* - get: Retorna o valor de uma determinada chave.
* - delete: Remove um par de chave e valor.
* - clear: Remove todos os elementos.

*/

const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]) ;
console.log(Array.from(timeUnits))
console.log(timeUnits)