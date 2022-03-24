/*
   Toda função tem uma variável this que contém a referência para o objeto responsável pela sua invocação
*/

// const obj1 = {
//     p1: 10,
//     getP1: function(){
//         const that = this;  //sombra de this salvar seu valor
//         const fn1 = function(){
            
//             return that.p1;
//         }
//         return fn1();
//     }
// };

//mudando para uma arrow function
const obj1 = {
    p1: 10,
    getP1: function(){
        const that = this;  //sombra de this salvar seu valor
        const fn1 = () => {
            
            return this.p1;
        }
        return fn1();
    }
};

console.log(obj1.getP1());