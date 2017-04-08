// Base Modules
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// Database Module
var db = require("./modules/db.js");

// Route Module
var index = require("./routes/index.js");

// App Config
app.set("port", (process.env.PORT || 5000));

// Middleware Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("server/public"));

// Routes
app.use("/", index);

// Listen
app.listen(app.get("port"), function(){
  console.log("Listen on port ", app.get("port"), " I do");
});

module.exports = app;
