var express = require('express');
var router = express.Router();

/* Login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '로그인' });
});

module.exports = router;
