var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* POST new livre. */
router.post('/', bodyParser.json(), function(req, res, next) {
  res.json(req.body);

  console.log(req.body.titre+req.body.auteur+req.body.edition);

  var db = req.app.get('connection');
  
  var sql = "INSERT INTO livres (titre, auteur, edition) VALUES (?)";
  var data = [[req.body.titre, req.body.auteur, req.body.edition]]
  db.query(sql, data, function(error, result){
    console.log(result);
  });
});

module.exports = router;