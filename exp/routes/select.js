var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  var connection = req.app.get("connection");
  
  var table = req.query.table;
  var column = req.query.column;
  var where = req.query.where;
  var whereDefinition = req.query.whereDefinition;

  console.log("table", table, "column", column, "where", where, "whereDefinition", whereDefinition);
  connection.query(
    `SELECT ${column} FROM ${table} WHERE ${whereDefinition} = ${where}`,
    function(error, results, fields) {
      if (error) throw error;
      res.send({ results });
    }
  );
});

module.exports = router;
