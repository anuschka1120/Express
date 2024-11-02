var express = require('express');
var app = express();

app.get('/test', function(req, res) {
  console.log("Inside /test route");  // ログ確認用
  res.send("Hello from Test Route");  // シンプルなテキストを返す
});

app.listen(30012, function() {
  console.log("Server is running on port 30012");
});
