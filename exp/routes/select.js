var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
var connection = req.app.get('connection')
var toReturn;

 connection.query("SELECT * FROM cats", function(error, results, fields) {
    if (error) throw error;
 
    res.send({result:results[0]});
  });

 
  
});

module.exports = router;
