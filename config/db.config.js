'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host     : '93.86.242.152',
    user     : 'ristic',
    password : '@s4Z9(qkzf',
    database : 'test'
  });
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;