var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Food Trip' });
});

/* Login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '로그인' });
});

/* Sign up */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: '회원가입' });
});

module.exports = router;
