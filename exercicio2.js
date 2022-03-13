/*
Exercício 2
 
Objetivo: Com base no nome da tabela e nas colunas, monte uma estrutura de objetos para armazenar tanto a definição da tabela quanto os dados.

Instruções: Dado o comando:

create table author (id number, name string, age number, city string, state string, country string)

Crie um objeto chamado "database".
Dentro do objeto "database", crie um objeto chamado "tables".
Dentro do objeto "tables", crie um objeto com o nome da tabela.
Dentro do objeto criado com o nome da tabela, crie um objeto chamado "columns", onde as chaves são representadas pelo nome da coluna e o valor pelo tipo.
Dentro do objeto criado com nome da tabela, crie um array chamado "data".
Exiba o conteúdo do objeto "database" utilizando JSON.stringify

Resultado
{
    "tables": {
        "author": {
            "columns": {
                "id": "number",
                "name": "string",
                "age": "number",
                "city": "string",
                "state": "string",
                "country": "string"
            },
            "data": []
        }
    }
}

Dicas: Percorra as colunas com for/of e utilize a notação de [] tanto para criar e acessar as propriedades nos objetos. 
É possível utilizar um parâmetro na operação JSON.stringify para formatar o objeto. Para isso, passe como terceiro parâmetro alguns espaços em branco ou o caracter tab.

Conteúdo abordado neste exercício:

Object
for/of
String.prototype.trim()
JSON.stringify

*/

const comando = "create table author (id number, name string, age number, city string, state string, country string)";

// First Resolution #1
// const regexp = /create table (\w+) \((.+)\)/;
// let param = comando.match(regexp);
// let columnsTable = param[2].split(", ");

// let database = new Object({});
// database.table = {};
// database.table[param[1]] = {};
// database.table[param[1]].columns = {};

// for(let colum of columnsTable){
//     let [colName, colType] = colum.split(" ")
//     database.table[param[1]].columns[colName] = colType;
//  }

// database.table[param[1]].data = [];

// console.log(JSON.stringify(database, '', ' '));


// Resolution #2
// //Create regexp para pegar dividir o string
// const regexp = /create table (\w+) \((.+)\)/;
// let result = comando.match(regexp);

// // Create two variable, one for name table and body line command
// let nameTable = result[1];
// let body = result[2].split(", ");

// // 1- Crie um objeto chamado "database".
// let database = Object.create({});

// // 2- Dentro do objeto "database", crie um objeto chamado "tables".
// database.table = Object.create({});

// // 3- Dentro do objeto "tables", crie um objeto com o nome da tabela.
// database.table[nameTable] = Object.create({});

// // 4- Dentro do objeto criado com o nome da tabela, crie um objeto chamado "columns", onde as chaves são representadas pelo nome da coluna e o valor pelo tipo.
// database.table[nameTable].columns = Object.create({});

// for(let item of body){
//     let [columnName, columnType] = item.split(" ");
//     database.table[nameTable].columns[columnName] = columnType
// }

// // 5- Dentro do objeto criado com nome da tabela, crie um array chamado "data".

// database.table[nameTable].data = [];

// console.log(JSON.stringify(database, '', ' '));

//Resposta do Professor

const regexp = /create table (\w+) \((.+)\)/;
const parsedComando = comando.match(regexp);
const tableName = parsedComando[1];
let columns = parsedComando[2];
columns = columns.split(", ");

const database = {
    table: {
        [tableName]: {
            columns: {},
            data: []
        }       
    }
};

for(let column of columns) {
    column = column.split(" ");
    const name = column[0];
    const type = column[1];
    database.table[tableName].columns[name] = type;
}

console.log(JSON.stringify(database, "", " "));