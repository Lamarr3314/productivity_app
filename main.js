var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql5.freesqldatabase.com",
  user: "sql5513013",
  password: "vG7GCIGBcu",
  database: "sql5513013"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});