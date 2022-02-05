
/*  JOSHUA TIMBOL 301068352
     COMP229 SEC005
     ASSIGNMENT 2
     OCTOBER 22, 2020*/
     
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;


