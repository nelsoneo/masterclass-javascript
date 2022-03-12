// const book = {
//     title: "Clean Code",
//     author: "Robert Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };
//----------------------------------------------------------------
// const title = "Clean Code";
// const author = "Robert Martin";
// const pages = 464;
// const language = "English";
// const available = true;

/*Quando o nome da variavel é igual o nome da chave do object, pode ser feito assim*/

// const book = {
//     title,
//     author,
//     pages,
//     language,
//     available
// };

// console.log(book);

//----------------------------------------------------------------
//Posso declarar as chave do objeto como string com aspas duplas o simples 
// const book = {
//     title: "Clean Code",
//     author: "Robert Martin",
//     "number-of-pages": 464,
//     language: "English",
//     available: true
// };

// console.log(book);


//Também é possível computar as chaves em tempo de execução

// const key1 = "title";
// const key2 = "author";
// const key3 = "pages";
// const key4 = "language";
// const key5 = "available";

// const book = {
//     [key1]: "Clean Code",
//     [key2]: "Robert Martin",
//     [key3]: 464,
//     [key4]: "English",
//     [key5]: true
// };


//Além da notação literal, é possível atribuir propriedades aos objetos por meio da sua referência

// const book = {};
// book.title = "Clean Code";
// book.author = "Robert C. Martin";
// book.pages = 464;
// book.language = "English";
// book.available = true;

// const book = new Object();
// book.title = "Clean Code";
// book.author = "Robert C. Martin";
// book.pages = 464;
// book.language = "English";
// book.available = true;

// const book = Object.create(null);
// book.title = "Clean Code";
// book.author = "Robert C. Martin";
// book.pages = 464;
// book.language = "English";
// book.available = true;

//Assim como na notação literal, é possível computar as chaves de um objeto em tempo de execução por meio da sua referência.

// const key1 = "title";
// const key2 = "author";
// const key3 = "pages";
// const key4 = "language";
// const key5 = "available";

// const book = Object.create(null);
// book[key1] = "Clean Code";
// book[key2] = "Robert C. Martin";
// book[key3] = 464;
// book[key4] = "English";
// book[key5] = true;

// Cada uma das propriedades de um objeto podem ser consultadas por meio da sua referência, de forma direta.

// const book = {
//     title: "Clean Code",
//     author: "Robert Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book.pages);
// console.log(book.language);
// console.log(book.available);

// É possível consultar cada uma das propriedades de um objeto por meio da computação das chaves.

// const book = {
//     title: "Clean Code",
//     author: "Robert Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };

// for (let key in book){  //para recorrer, mostrar o edtar as propriedades "chaves ou key" ou valor de elas
//     console.log(key);
// }

// for (let key in book){
//     console.log(book[key])
// }

///----------------------------------------------------------------

const book1 = {
    title: "Clean Code",
    author: "Robert Martin",
    pages: 464,
    language: "English",
    available: true
};

const book2 = {};

for (let key in book1) {

    book2[[key]] = book1[key];
}

console.log(book2);