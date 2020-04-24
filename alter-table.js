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

  // Alter Table
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, res) {
    if (err) throw err;
    console.log("Our Table has been altered...");
  });
});
