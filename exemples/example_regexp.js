// let regexp = /nelsoneo@gmail.com/;
// let result = regexp.test("nelsoneo@gmail.com");
// result = regexp.exec("nelsoneo@gmailxcom")
// console.log(result);

let regexp = /^(\w+)@(\w+)((\.\w{2,3})+)$/;
let result = regexp.exec("john@gmail.com.br");
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result.index);
console.log(result.input);