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

const timeUnits = new Map() ;
timeUnits.set('seconds', 1);
timeUnits.set('minutes', 60);
timeUnits.set('hours', 3600);

console.log(timeUnits.get('seconds'));
console.log(timeUnits.get('minutes'));
console.log(timeUnits.get('hours'));
console.log(timeUnits.get('day'));