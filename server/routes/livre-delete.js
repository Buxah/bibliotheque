var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* POST delete livre. */
router.post('/', bodyParser.json(), function(req, res, next) {
  res.json(req.body);

  console.log(req.body.id);

  var db = req.app.get('connection');
  
  var sql = "DELETE FROM clients WHERE id_client = ?;";
  db.query(sql,[req.body.id], function(error, result){
    console.log(result);
  });
});

module.exports = router;