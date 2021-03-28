var express = require('express');
var router = express.Router();
const db = require('../models');


/* GET users listing. */
router.get('/', function(req, res, next) {

	db.users.findAll({ limit: 10 }).then(function(rows) {
       res.render('user', { rows: rows });
   });
  //res.send('respond with a resource');
});

module.exports = router;
