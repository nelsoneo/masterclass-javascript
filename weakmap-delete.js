/*
    WeakMap é um objeto, similar ao Map, que permite qpenas chaves do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável.

    set: Adiciona um par de chave e valor.
    has: Retorna true se a chave existir.
    get: Retorna o valor de uma determinada chave.
    delete: Remove um par de chave e valor.
*/

const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};
wm1.set(obj1, 'obj1');
wm1.set(obj2, 'obj2');
console.log(wm1.delete(obj1));
console.log(wm1.delete(obj2));
console.log(wm1);
console.log(wm1.get(obj1));
console.log(wm1.has(obj2));
