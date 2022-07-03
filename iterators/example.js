/*

    São convenções implementadas por Arrays, Maps, Sets e String que os tornam iteráveis por meio de um protocolo de iteração

    Além do Array é possível utilizar o protocolo de iteração dos objetos Map, Set e String.

 */

//  const classicLanguages = ['Fortran', 'Lisp', 'COBOL'];
//  const modermLanguages = ['Python', 'Ruby', 'JavaScript'];

//  for (let index = 0; index < languages.length; index++) {
//    console.log(languages[index]) //imprime os elementos
//  }

// for (let key in languages) {
//    console.log(key) //imprime a key
// }  

// for (let key in languages) {
//    console.log(languages[key]) //imprime os elementos
// }

// languages.forEach(item => console.log(item))  //imprime os elementos

// for (let iterator of languages) {
//     console.log(iterator)  //imprime os elementos
// }

// const languages = classicLanguages.concat(modermLanguages)

// const languages = [... classicLanguages, ...modermLanguages]  //concatena também os array

// const languages = new Map([['Fortran', 1957], ['Lisp', 1958], ['COBOL',1959]]);

// for(let language of languages){
//     console.log(language);  //imprime os elementos do map, cada array separado
// }

// for(let [language, year] of languages){
//     console.log(language, year);  //imprime os elementos do map, cada array separado usando destructuring
// }

// console.log([...languages]) 

// const languages = new Set(['Fortran', 'Lisp', 'COBOL']);

// for(let language of languages){
//     console.log(language);
// }

// console.log([...languages]);

const language = 'COBOL'

// for(let char of language){
//     console.log(char)
// }

console.log([...language]);