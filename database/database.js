const mysql = require('mysql2')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
});

<<<<<<< HEAD

=======
>>>>>>> 6c7a8abd8dc44586f28b86cbd8d0d2bf37eb6a6f
connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('est Connecté');
    }
 });

 module.exports = connection;