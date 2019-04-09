var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* POST edit livre. */
router.post('/', bodyParser.json(), function(req, res, next) {
  res.json(req.body);

  console.log(req.body.titre+req.body.auteur+req.body.edition);

  var db = req.app.get('connection');
  
  var sql = "UPDATE livres SET titre = ?, auteur = ?, edition = ? WHERE id_livre = ?";
  db.query(sql,[req.body.titre, req.body.auteur, req.body.edition, req.body.id], function(error, result){
    console.log(result);
  });
});

module.exports = router;