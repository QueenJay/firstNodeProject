var mysql = require('mysql');

//create a connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889 ,
})

//connect to MySQL
con.connect(function(err){
    if (err) throw err;
    console.log('connected successfully!');
});