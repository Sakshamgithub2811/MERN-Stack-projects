var express = require('express');
var router = express.Router();
var pool = require('./pool');

/* GET home page. */
router.get('/product', function (req, res, next) {
  res.render('productinterface', { 'message': '' });
});

router.post('/submitproduct', function (req, res, next) {
  pool.query("insert into products(categoryid, subcategoryid, brandid, productname, price, offerprice, ratings, description, stock, status, picture) values(?,?,?,?,?,?,?,?,?,?,?)", [req.body.categoryid, req.body.subcategoryid, req.body.brandid, req.body.productname, req.body.price, req.body.offerprice, req.body.ratings, req.body.description, req.body.stock, req.body.status, req.body.picture], function (error, result) {
    if (error) {
      console.log('Error:', error)
      res.render('productinterface', { message: 'Server Error....' })
    }
    else {
      console.log('Result:', result)
      res.render('productinterface', { message: 'Record Submitted Succesfully...' })
    }


  });

});




module.exports = router;
