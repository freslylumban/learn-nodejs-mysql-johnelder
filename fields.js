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

  // Fields
  var sql = "SELECT * FROM customers";
  con.query(sql, function (err, res, fields) {
    if (err) throw err;

    console.log(fields[1].name);
    console.log("-------------");
    console.log(res[0].name);
  });
});
