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
  res.render('signup', { title: '회원가입', items:[] });
});

/* 맛집등록 */
router.get('/enroll', function(req, res, next) {
  res.render('enroll', { title: '맛집등록', items:[] });
});

/* 맛집등록 */
router.get('/review', function(req, res, next) {
  res.render('review', { title: '맛집리뷰', items:[] });
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

// CREATE MATZIP
router.post('/insert', function(req, res,next){
var newMatzip = new Matzip();
newMatzip.mzname = req.body.mzname;
newMember.mztime = req.body.mztime;
newMember.mzmenu = req.body.mzmenu;
newMember.mzaddr = req.body.mzaddr;
newMember.mztel = req.body.mztel;
    
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
