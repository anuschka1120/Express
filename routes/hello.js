var express = require('express');
var router = express.Router();

// ルートを '/' に変更
router.get('/', function(req, res, next) {
  console.log("Inside /hello route");
  res.render('hello', { title: 'Hello Express 2' });
});

module.exports = router;