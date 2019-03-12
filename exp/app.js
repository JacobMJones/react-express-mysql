var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mysql = require("mysql");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/select");
var cors = require("cors");
var app = express();
app.use(cors());
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "***",
  database: "pets"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are now connected...");
});

app.set('connection', connection)
// connection.query("SELECT * FROM cats", function(error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results);
// });
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/select", selectRouter);

console.log("express server started");
module.exports = app;