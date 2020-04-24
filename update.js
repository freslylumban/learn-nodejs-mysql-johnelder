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

  // Update Records
  var sql = "UPDATE customers SET name = 'Fresly Sipahutar' WHERE id = 1";
  // var sql = "SELECT * FROM customers";
  con.query(sql, function (err, res) {
    if (err) throw err;

    console.log(res);
  });
});
