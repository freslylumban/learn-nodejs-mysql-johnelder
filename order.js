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

  // Order By
  var sql = "SELECT name FROM customers ORDER BY id DESC";
  con.query(sql, function (err, res, fields) {
    if (err) throw err;

    console.log(res);
  });
});
