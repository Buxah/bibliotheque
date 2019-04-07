var express = require('express');
var router = express.Router();

router.get('/search/:title', function(req, res, next) {
    var title = req.params.title;
    Product.find({title: title}, function (err, products) {
        if(err) {
            return res.render('shop/search', {products: null});

        }
        res.render('shop/search', {products: products});
    });
});