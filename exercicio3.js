/*
Exercício 3
 
Objetivo: Crie dois métodos no objeto "database" chamados de "createTable" e "execute". O comando "createTable" já foi implementado no exercício anterior, 
mova o código e utilize o método "execute" para invocar dinamicamente o método "createTable".

Instruções:

No objeto "database", crie uma função chamada "createTable", que recebe o comando por parâmetro.
Mova o código responsável por criar a tabela para dentro do método "createTable".
Crie uma função chamada "execute", invocando dinamicamente a função "createTable".

Cenário: database.execute("create table author (id number, name string, age number, city string, state string, country string)");

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

Dicas: Não se esqueça de utilizar o "this" para referenciar a propriedade "tables" do objeto "database". 
Você pode utilizar a operação String.prototype.startsWith para verificar se o comando começa com "create table" e realizar a chamada para o método "createTable".

Conteúdo abordado neste exercício:
Function
if
String.prototype.startsWith
this
Method Notation
 */


const database = {
  tables: {},
  createTable(lineComando) {
    const regexp = /create table (\w+) \((.+)\)/;

    let result = lineComando.match(regexp);
    const tableName = result[1];

    this.tables[tableName]  = {
      columns: {},
      data: [],
    };

    let columns = result[2];
    columns = columns.split(", ");

    for (let column of columns) {
      column = column.split(" ");
      const name = column[0];
      const type = column[1];
      this.tables[tableName].columns[name] = type;
    }
  },
  execute(lineComando){
    if(lineComando.startsWith("create table")){
      return this.createTable(lineComando)
    }
  }
};

database.execute("create table author (id number, name string, age number, city string, state string, country string)");

console.log(JSON.stringify(database, "", " "));
