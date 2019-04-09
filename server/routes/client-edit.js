var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* POST edit client. */
router.post('/', bodyParser.json(), function(req, res, next) {
  res.json(req.body);

  console.log(req.body.id+req.body.nom+req.body.prenom+req.body.date_naissance+req.body.email);

  var db = req.app.get('connection');
  
  var sql = "UPDATE clients SET nom = ?, prenom = ?, date_naissance = ?, email = ? WHERE id_client = ?";
  db.query(sql,[req.body.nom,req.body.prenom,req.body.date_naissance, req.body.email, req.body.id], function(error, result){
    console.log(result);
  });
});

module.exports = router;