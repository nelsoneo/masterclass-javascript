/**
 *  WeakSet é um objeto, similar ao Set, que permite apenas valores do tipo object e mantém as referências de forma fraca, sendo volátil e não iteravel.
 * 
 * add: Adiciona um elemento.
 * has: Retorna true se o elemento existir.
 * delete: Remove um elemento.
 */

const ws1 = new WeakSet();
const obj1 = {}
const obj2 = {}
ws1.add(obj1)
ws1.add(obj2)

console.log(ws1.has(obj1));
console.log(ws1.has(obj2));

console.log("delete", ws1.delete(obj1))
console.log("delete", ws1.delete(obj2))

console.log(ws1.has(obj1));
console.log(ws1.has(obj2));