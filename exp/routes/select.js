var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
var connection = req.app.get('connection')
console.log(req.query)
var table = req.query.table
var column = req.query.column
 connection.query(`SELECT ${column} FROM ${table}`, function(error, results, fields) {
    if (error) throw error;
    res.send({results});
  });

 
  
});

module.exports = router;
