var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mypage', function(req, res, next) {
  res.render('index', { title: 'Saksham',mycity:'gwalior' });
});

module.exports = router;
