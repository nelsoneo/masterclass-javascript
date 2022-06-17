/*
    Um Set é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado.

    size: Retorna a quantidade de elementos.
    add: Adiciona um elemento.
    forEach: Itera sobre o set.
    has: Retorna um elemento.
    delete: Remove um elemento.
    clear: Remove todos os elementos.
*/

const charsets = new Set();
charsets.add("ASCII")
charsets.add("ISO-8959")
charsets.add("UTF-8")

charsets.forEach(function(charset){
    console.log(charset);
})

