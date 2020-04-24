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
  var sql = "INSERT INTO customers (name, email) VALUES ('Rosmelia Daeli', 'daelirosmelia@gmail.com')";
  con.query(sql, function (err, res) {
    if (err) throw err;
    console.log("Data inserted into Table...");
  });
});
