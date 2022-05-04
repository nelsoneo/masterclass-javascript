/*
    As funções do tipo getter e setter servem para interceptar o acesso as propriedades de determinado um objeto
*/

// const rectangle = {
//     set x(x){
//        if(x > 0){
//         this._x = x;
//        } else {
//            console.log("Invalid value for x");
//        }
//     },
//     set y(y){
//        if(y > 0) {
//         this._y = y;
//        } else {
//            console.log("Invalid value for y");
//        }
//     },
//    get area(){
//         return this._x * this._y;
//     }
// };

// rectangle.x = -4;
// rectangle.y = -2;

// console.log(rectangle.area);

/*
    Por meio da operação defineProperty da ObjectAPI, também é possível definir funões do tipo getter e setter
*/

const rectangle = {};
Object.defineProperty(rectangle, 'x', {
    set(x){
        if(x > 0){
            this._x = x;
        } else {
            console.log("Invalid value for x");
        }
    }
})
Object.defineProperty(rectangle, 'y', {
    set(y){
        if(y > 0){
            this._y = y;
        } else {
            console.log("Invalid value for y");
        }
    }
})
Object.defineProperty(rectangle, 'area', {
    get(){
       return this._x * this._y;
    }
});

rectangle.x = -10;
rectangle.y = -2;
console.log(rectangle.area);