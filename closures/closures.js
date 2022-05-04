/*
    Na Linguagem JavaScript, toda função permite a utilização de variáveis que não foram declaradas e nem passadas por parâmetro
*/
// const v1 = 10;
// function fn1(){
//     function fn2(){

//         console.log(v1);
//     }
//     fn2();
// };

// fn1();

/*
    O problema é que como as funções são de primeira clase, dependendo da situação poderia existir uma ambiguidade e isso foi resolvido como o conceito de closure
*/

function fn1(){
    const v1 = 10;
    return function(){
        console.log(v1);
    }
};

const fn2 = fn1();
const v1 = 100;
fn2();

