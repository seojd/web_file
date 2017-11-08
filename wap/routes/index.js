var express = require('express');
var router = express.Router();
var Member = require('../models/member');

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

// CREATE MEMBER
router.post('/insert', function(req, res,next){
var newMember = new Member();
newMember.id = req.body.id;
newMember.password = req.body.password;
newMember.password2 = req.body.password2;
newMember.sex = req.body.sex;

newMember.save(function(err){
if(err){
    console.error(err);
    res.json({result: 0});
    return;
    }
    res.redirect('/');
});
});


module.exports = router;
