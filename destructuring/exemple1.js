
/*
  * É possível extrair os valores de um array, criando variáveis em ordem, de acordo com a posição de cada elemento.
 */

const [name, author, date] = 'C;Dennis Ritchie;1972'.split(';');
console.log(name, author, date);

const [, author, date] = 'C;Dennis Ritchie;1972'.split(';');
console.log(author, date);

const [name, , date] = 'C;Dennis Ritchie;1972'.split(';');
console.log(name, date);

