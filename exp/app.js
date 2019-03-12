require('dotenv').config()
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mysql = require("mysql");
var indexRouter = require("./routes/index");
var selectRouter = require("./routes/select");
var cors = require("cors");
var app = express();
app.use(cors());
var connection = mysql.createConnection({
  host:  process.env.DB_HOST,
  user:  process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "pets"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are now connected...");
});

app.set('connection', connection)
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/select", selectRouter);

console.log("express server started");
module.exports = app;
