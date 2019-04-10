var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var title = req.params.title;
    Product.find({title: title}, function (err, products) {
        if(err) {
            return res.render('client/search', {products: null});

        }
        res.render('clients/search', {products: products});
    });
});