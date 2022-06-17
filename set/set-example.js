/*
    Um Set é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado.

    size: Retorna a quantidade de elementos.
    add: Adiciona um elemento.
    forEach: Itera sobre o set.
    has: Retorna um elemento.
    delete: Remove um elemento.
    clear: Remove todos os elementos.
*/

let array = [10, 10, 10];
console.log(array);
console.log(array.length);

const set  = new Set(array);
console.log(set);
console.log(set.size);

array = Array.from(set);
console.log(array);
console.log(array.length);

//tirando elemento duplicados em um array sem utilizar o Set(), como foi mostrado encima é mais practico utilizar o Set(), que os exemplos em baixo a continuacão
//Example 1
const obj = {};

array.forEach(function (element) {
    obj[element] = undefined;
    // console.log(obj);
})
array = Object.keys(obj);
// console.log(array);

//Example 2

let setarray = [];

array.forEach(function (element) {
    // if (setarray.includes(element)) return;
    // setarray.push(element);
    //Or
    if (!setarray.includes(element)) {
        setarray.push(element);
    }
})
console.log(setarray);
