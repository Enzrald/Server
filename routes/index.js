var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/login', function(req,res) {
  res.render('login', { title: 'Login' });
});

router.get('/sign-up', function(req,res) {
  res.render('sign-up', { title: 'Sign Up' });
});

router.post('/login', function(req,res){
  res.redirect('/');
});

router.post('/sign-up', function(req,res){
  res.redirect('/');
});

module.exports = router;
