var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('test', { name: 'Test tT', role: 'Dev' });
});

module.exports = router;
