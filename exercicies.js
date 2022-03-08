/*
Exercício 1
 
Objetivo: Extraia partes do comando como o nome da tabela e as colunas, armazenando-as em variáveis.


Instruções

Dado o comando: create table author (id number, name string, age number, city string, state string, country string)

Extraia o nome da tabela e armazene em uma variável chamada "tableName".
Extraia as colunas da tabela e armazene em uma variável chamada "columns".
Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.

Resultado

tableName = "author"
columns = [ 'id number',' name string',' age number',' city string',' state string',' country string']

Dicas: Explore ao máximo as operações disponíveis na String API como: String.prototype.match, String.prototype.replace e String.prototype.split, juntamente com expressões regulares. A operação String.prototype.split retorna uma array, então não é necessário se preocupar em criar ou adicionar as colunas no array.

*/


let comando = "create table author (id number, name string, age number, city string, state string, country string)";

//Resposta minha #1 funcionou
// let lineIni = comando.indexOf("(");
// let lineEnd = comando.indexOf(")");

// let firstLine = comando.slice(0, lineIni-1);
// let secondLine = comando.slice(lineIni+1, lineEnd);

// firstLine = firstLine.split(" ");
// secondLine = secondLine.split(",");

// let tableName = firstLine[2];
// let columns = [];

// for (const iterator of secondLine) {
//     columns.push(iterator.trim())
// }

//Resposta #2 usando expressões regular

const regexp = /^create table (\w+)(.\S)(.+)(.)/;
let result = regexp.exec(comando);
let tableName = result[1];
let columns = result[3].split(",").map(item =>item.trimStart())
console.log(`The table name is ${tableName} and column names are : ${columns.join(", ")}`)