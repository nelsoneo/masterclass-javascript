/*
    Assim como nas funções, é possível definir valores padrão para cad uma das variáveis
*/

const language = 'C;Dennis Ritchie;1972'.split(';');
const [name = '-', author = '-', year = '-'] = language;
console.log(language);

// const language = 'C;Dennis Ritchie'.split(';');
// const [name = '-', author = '-', year = '-'] = language;
// console.log(language);

// const language = 'C'.split(';');
// const [name = '-', author = '-', year = '-'] = language;
// console.log(language);

