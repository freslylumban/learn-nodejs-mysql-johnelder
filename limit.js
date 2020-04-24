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

  // Limit the Records
  // var sql = "SELECT * FROM customers ORDER BY id DESC LIMIT 2";
  var sql = "SELECT * FROM customers LIMIT 2";
  con.query(sql, function (err, res) {
    if (err) throw err;

    console.log(res);
  });
});
