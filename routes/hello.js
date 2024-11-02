var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res, next) { // 明示的に /hello パスを指定
  console.log("Inside /hello route");
  res.render('hello', { title: 'Hello Express 2' });
});

module.exports = router;
