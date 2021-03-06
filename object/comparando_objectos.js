// A comparação dos objetos é feita por medio da sua referência. assim, ainda que dois objetos tenham exatamente as mesmas propriedades eles seráo considerados diferentes.

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};
const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};

// console.log(book1 == book2); // false

//Uma das formas para comparar os objetos é analisando cada uma das suas propriedades por meio da comparação das chaves e valores.
//exemplo: de comparador simple

let equal = true;

for (let key in book1) {
    if(book1[key] !== book2[key]) {
        equal = false;
    }
}

for (let key in book2) {
    if(book2[key] !== book1[key]) {
        equal = false;
    }
}
console.log(equal);