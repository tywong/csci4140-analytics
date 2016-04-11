var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>STOP</h1>');
});

router.route('/jsonp').get(function(req,res) {
  res.json(req.param('abc'));
})

module.exports = router;
