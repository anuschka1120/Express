var express = require('express');
var app = express();

app.get('/test', function(req, res) {
  console.log("Inside /test route");
  res.send("Hello from Test Route");
});

module.exports = app;