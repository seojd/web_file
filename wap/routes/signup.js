var express = require('express');
var router = express.Router();

/* Sign up */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: '회원가입' });
});

module.exports = router;
