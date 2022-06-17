/*
    Um Set é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado.

    size: Retorna a quantidade de elementos.
    add: Adiciona um elemento.
    forEach: Itera sobre o set.
    has: Retorna um elemento.
    delete: Remove um elemento.
    clear: Remove todos os elementos.
*/

const charsets = new Set(['ASCII', "ISO-8859-1", "UTF-8"]);
console.log(charsets);
console.log(Array.from(charsets));