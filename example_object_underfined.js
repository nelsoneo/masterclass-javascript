const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 646,
    language: "English",
    available: true
}

// console.log("title" in book)
// console.log("author" in book)
// console.log("pages" in book)
// console.log("language" in book)
// console.log("available" in book)
// console.log("subtitle" in book)



//As propriedades de um bojeto podem ser apagas por meio do operador delete

// delete book.available;
delete book["available"];

console.log(book);