/*
    Por meio das operações call e apply é possível invocar uma função passando o this por parâmetro.
 */

// const circle = {
//     radius: 10,
//     calculateArea(){
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// const calculateArea = function(fn){
//     return fn(Math.PI * Math.pow(this.radius, 2));
// }

// const circle = {
//     radius: 10,
//     calculateArea
// };

/*
    DIFERNÇA ENTER call e apply
*/

// console.log(calculateArea.call(circle, Math.round));  // o primer paâmetro é o this, os seguentes serão parte da função invocada
// // console.log(calculateArea.apply(circle, Math.ceil)); //o primeiro parâmetro é o this, o segundo tem que ser passado em um array. Deste jeito da erro
// console.log(calculateArea.apply(circle, [Math.ceil])); //o primeiro parâmetro é o this, o segundo tem que ser passado em um array. jeito correto

/*
    A operação bind permite encapsular o this dentro da função, retornado-a
*/

const calculateArea = function(fn){
    return fn(Math.PI * Math.pow(this.radius, 2));
}

const circle = {
    radius: 10,
    calculateArea
};

const calculateAreaForCircle = calculateArea.bind(circle);
console.log(calculateAreaForCircle(Math.round));
console.log(calculateAreaForCircle(Math.ceil));