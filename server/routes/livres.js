var express = require('express');
var router = express.Router();

/* GET livres listing. */
router.get('/', function(req, res, next) {
  
  var db = req.app.get('connection');
  
  var sql = "SELECT * FROM livres";
  
  db.query(sql, function(error, result){
    res.send(result);
  });
});

module.exports = router;