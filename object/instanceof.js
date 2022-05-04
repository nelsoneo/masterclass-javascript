/*
    Com o operador instanceof é possível verificar se um objeto foi criado por medio de uma determinada função constructora analisando a sua cadeia de protótipos
*/

// const date = new Date();
// console.log(date instanceof Date);
// console.log(date instanceof Object);
// console.log(date instanceof Array);


const _instanceof = function(obj, fn) {
    if (obj === fn.prototype) return true;
    if (obj === null) return false;
    return _instanceof(obj.__proto__, fn)
};

const date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);

console.log(_instanceof(date, Date));
console.log(_instanceof(date, Object));
console.log(_instanceof(date, Array));
