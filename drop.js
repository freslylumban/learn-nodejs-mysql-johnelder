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

  // Drop Table
  var sql = "DROP TABLE IF EXISTS users";
  con.query(sql, function (err, res) {
    if (err) throw err;

    console.log(res);
  });
});
