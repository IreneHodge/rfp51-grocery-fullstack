const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ritual123",
  database: "groceryList",
});

connection.connect();

module.exports = connection;
