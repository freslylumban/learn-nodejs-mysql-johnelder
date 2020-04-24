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

  // Select Data
  var sql = "SELECT * FROM customers";
  con.query(sql, function (err, res, fields) {
    if (err) throw err;
    console.log(res);
    console.log(res[0]);
    console.log(res[0].name);
    console.log(`${res[0].name} | ${res[0].email}`);
  });
});
