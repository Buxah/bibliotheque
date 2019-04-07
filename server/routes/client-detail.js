var express = require('express');
var router = express.Router();

/* GET client details. */
router.get('/:id', function(req, res, next) {
  
  var db = req.app.get('connection');
  
  var sql = ("SELECT * FROM clients WHERE id_client = ?", [id_client]);
  
  db.query(sql, function(error, result){
    res.send(result);
  });
});

module.exports = router;