// const person1 = {
//     name: "Linus Torvalds",
//     city: "Helsinki",
//     year: 1969,
//     getAge(){
//         return (new Date()).getFullYear() - this.year;
//     }
// }

// const person2 = {
//     name: "Bill Gates",
//     city: "Seatlte",
//     year: 1955,
//     getAge(){
//         return (new Date()).getFullYear() - this.year;
//     }
// }

// console.log(person1);
// console.log(person1.getAge());
// console.log(person2);
// console.log(person2.getAge());

/*
    A função fábrica, que é um tipo de padrão, retona um novo objeto após ser invocada diretamente.
*/

// const personPrototype = {
//     getAge(){
//         return (new Date()).getFullYear() - this.year;
//     }
// }

// const createPerson = function(name, city, year){
//     const person = {
//         name,
//         city, 
//         year, 
//     };
//     Object.setPrototypeOf(person, personPrototype)
//     return person;
// };

// const person1 = createPerson("Linus Torvalds", "Helsinki", 1969);
// const person2 = createPerson("Bill Gates", "Seattle", 1955);

// console.log(person1);
// console.log(person1.getAge());
// console.log(person1.__proto__);
// console.log(person2);
// console.log(person2.getAge());
// console.log(person2.__proto__);
// console.log(person2.__proto__ == person1.__proto__);

/*
    A função constructora retorna um novo objeto ao ser invocada por medio do operador new
*/

// const Person = function(name, city, year){
//     this.name = name;
//     this.city = city;
//     this.year = year;
// };

// Person.prototype.getAge = function(){
//     return (new Date()).getFullYear() - this.year;
// }
// const person1 = new Person("Linus Torvalds", "Helsinki", 1969);
// const person2 = new Person("Bill Gates", "Seattle", 1955);

// console.log(person1);
// console.log(person1.__proto__);
// console.log(person1.getAge());
// console.log(person2);
// console.log(person2.__proto__);
// console.log(person2.getAge());
// console.log(person2.__proto__ == person1.__proto__);

/*
    Toda função tem uma propriedade chamada prototype, que é vinculada ao __proto__ do objeto criado pelo operador new
*/

const _new = function(fn, ...params){
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    fn.apply(obj, params);
    return obj;
}

const Person = function(name, city, year){
    this.name = name;
    this.city = city;
    this.year = year;
};

Person.prototype.getAge = function(){
    return (new Date()).getFullYear() - this.year;
}

const person1 = _new(Person, "Linus Torvalds", "Helsinki", 1969);
const person2 = _new(Person, "Bill Gates", "Seattle", 1955);

console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.__proto__);
console.log(person2.getAge());
console.log(person2.__proto__ == person1.__proto__);