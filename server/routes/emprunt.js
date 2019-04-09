var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* POST new emprunt. */
router.post('/', bodyParser.json(), function(req, res, next) {
  res.json(req.body);

  console.log(req.body.id_client+req.body.id_exemplaire);

	var date = date.now();
  var db = req.app.get('connection');
  
  var sql = "INSERT INTO emprunts (id_client, id_exemplaire, date_emprunt) VALUES (?, ?, ?)";
  var data = [[req.body.id_client, req.body.id_exemplaire]]
  db.query(sql, data, date, function(error, result){
    
  });
});

module.exports = router;