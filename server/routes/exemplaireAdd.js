var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* POST new exemplaire. */
router.post('/', bodyParser.json(), function(req, res, next) {
  res.json(req.body);

  console.log(req.body.id_livre);

  var db = req.app.get('connection');
  
  var sql = "INSERT INTO exemplaires (id_livre, actif) VALUES (?)";
  var data = [[req.body.id_livre, req.body.actif]]
  db.query(sql, data, function(error, result){
    console.log(result);
  });
});

module.exports = router;