var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* POST new client. */
router.post('/', bodyParser.json(), function(req, res, next) {
  res.json(req.body);

  console.log(req.body.nom+req.body.prenom+req.body.date_naissance+req.body.email);

  var db = req.app.get('connection');
  
  var sql = "INSERT INTO clients (nom, prenom, date_naissance, email) VALUES (?)";
  var data = [[req.body.nom, req.body.prenom, req.body.date_naissance, req.body.email]]
  db.query(sql, data, function(error, result){
    
  });
});

module.exports = router;