const mysql = require('mysql2')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'musta1010',
    database: 'ecommerce'
});

connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('est Connecté');
    }
 });

 module.exports = connection;