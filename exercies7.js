const DatabaseError = function (statement, message) {
  this.statement = statement;
  this.message = message;
};

const database = {
  tables: {},
  createTable(statement) {
    const regexp = /create table ([a-z]+) \((.+)\)/;

    let result = statement.match(regexp);

    let [, tableName, columns] = result;

    this.tables[tableName] = {
      columns: {},
      data: [],
    };

    columns = columns.split(", ");

    for (let column of columns) {
      column = column.split(" ");

      let [name, type] = column;
      this.tables[tableName].columns[name] = type;
    }
  },
  insert(statement) {
    const regexp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
    const parsedStatement = statement.match(regexp);
    let [, tableName, columns, values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");
    let row = {};
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      const value = values[i];
      row[column] = value;
    }
    this.tables[tableName].data.push(row);
  },
  select(statement) {
    const regexp = /select (.+) from ([a-z]+)(?: where (.+))?/;
    const parsedStatement = statement.match(regexp);
    let [, columns, tableName, whereClause] = parsedStatement;
    columns = columns.split(", ");
    let rows = this.tables[tableName].data;

    if (whereClause) {
      let [columnWhere, valueWhere] = whereClause.split(" = ");

      rows = rows.filter(function (row) {
        return row[columnWhere] === valueWhere;
      });
    }

    rows = rows.map(function (row) {
      let selectRow = {};
      columns.forEach(function (column) {
        selectRow[column] = row[column];
      });
      return selectRow;
    });
    return rows;
  },
  delete(statement) {
    const regexp = /delete from ([a-z]+)(?: where (.+))?/;
    const parsedStatement = statement.match(regexp);
    let [, tableName, whereClause] = parsedStatement;
    if (whereClause) {
      let [columnWhere, valueWhere] = whereClause.split(" = ");
      this.tables[tableName].data = this.tables[tableName].data.filter(
        function (row) {
          return row[columnWhere] !== valueWhere;
        }
      );
    } else {
      this.tables[tableName].data = [];
    }
  },
  execute(statement) {
    if (statement.startsWith("create table")) {
      return this.createTable(statement);
    }

    if (statement.startsWith("insert")) {
      return this.insert(statement);
    }

    if (statement.startsWith("select")) {
      return this.select(statement);
    }

    if (statement.startsWith("delete")) {
      return this.delete(statement);
    }
    const message = `Syntax error: "${statement}"`;
    throw new DatabaseError(statement, message);
  },
};

database.execute(
  "create table author (id number, name string, age number, city string, state string, country string)"
);

try {
  database.execute(
    "create table author (id number, name string, age number, city string, state string, country string)"
  );
  database.execute(
    "insert into author (id, name, age) values (1, Douglas Crockford, 62)"
  );
  database.execute(
    "insert into author (id, name, age) values (2, Linus Torvalds, 47)"
  );
  database.execute(
    "insert into author (id, name, age) values (3, Martin Fowler, 54)"
  );
  database.execute("delete from author where id = 2");
  database.execute("select name, age from author");

  console.log(JSON.stringify(database, undefined, " "));
} catch (error) {
  console.log(error.message);
}