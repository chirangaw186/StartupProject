 const express = require('express');
 const mysql = require('mysql');

 const app = express();

 const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'my_db'
  });

  connection.connect((err)=>{
      if(err)
        throw err;
    console.log('mysql connected successfully!');
  });
// connection.query('SELECT 1+1 as solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });


  //create DB

  app.get('/createdb',(req,res) => {
    let sql = "create database FileHandler";
    connection.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database Created!');
    });

  });


//   connection.end();
   


 app.listen('5000', () => {
     console.log('Server started on port 5000...');
 })