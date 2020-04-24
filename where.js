const mysql = require("mysql");

// Create a connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb",
});

// Connect to MySQL
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the Database");

  // Where Clause
  // var sql = "SELECT * FROM customers WHERE id <= 4";
  // var sql = "SELECT * FROM customers WHERE name = 'Rosmelia Daeli'";
  // var sql = "SELECT * FROM customers WHERE name LIKE 'J%'";
  // var sql = "SELECT * FROM customers WHERE name LIKE 'J%' OR id = 1";
  var sql = "SELECT * FROM customers WHERE name LIKE 'F%' AND id = 1";
  con.query(sql, function (err, res, fields) {
    if (err) throw err;

    console.log(res);
  });
});
