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

  // Insert into
  var sql = "INSERT INTO customers (name, email) VALUES ?";
  var values = [
    ['Timothy Bergers', 'timothy@gmail.com'],
    ['Christian Mutt', 'chris@gmail.com'],
    ['Julia Hudson', 'julia@gmail.com'],
  ];
  con.query(sql, [values], function (err, res) {
    if (err) throw err;
    console.log(`Records inserted: ${res.affectedRows}`);
  });
});
