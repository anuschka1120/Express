var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("Inside /hello route"); // ログメッセージをわかりやすく変更
  res.render('hello', { title: 'Simple Test Page' }); // hello.jade をレンダリング
});

module.exports = router;