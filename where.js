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

  // Where Variables
  var name_search = 'J%';
  var id_search = 1;
  var sql = "SELECT * FROM customers WHERE name LIKE ? OR id = ?";
  con.query(sql, [name_search, id_search], function (err, res, fields) {
    if (err) throw err;

    console.log(res);
  });
});
