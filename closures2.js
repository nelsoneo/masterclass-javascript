/*
    Apesar de estático, o scope chain faz referência para objetos que estão na memória e podem ser compartilhados por mais de uma função
*/

// function fn1(){
//     let v1 = 10;
//     return {
//         m1(){
//             console.log(++v1);
//         },
//         m2(){
            
//             console.log(--v1);
//         }
//     }
// }

// const obj1 = fn1();
// obj1.m1();
// obj1.m2();

//-------------------

// const obj1 = {};
// for(var v1 = 0; v1 < 3; v1++){
//     obj1[v1] = function(){

//         console.log(v1);
//     }
// }

// // console.log(obj1);
// obj1[0](); 3
// obj1[1](); 3 
// obj1[2](); 3
//----------------------------------------------------------------
// const obj1 = {};
// for(var v1 = 0; v1 < 3; v1++){
//     obj1[v1] = (function(v2){
//        return function(){
//            console.log(v2);
//        }
//     }(v1));
// }

// obj1[0]();
// obj1[1]();
// obj1[2]();

//----------------------------------------------------------------
// const obj1 = {};
// for(var v1 = 0; v1 < 3; v1++){
//     obj1[v1] = (function(){
//            console.log(this.v2);
//     }).bind({v2 : v1});
// }

// obj1[0]();
// obj1[1]();
// obj1[2]();