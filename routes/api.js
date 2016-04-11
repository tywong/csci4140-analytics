var express = require('express');
var router = express.Router();
var Trace = require('../models/trace');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>STOP</h1>');
});

router.route('/jsonp').get(function(req,res) {
	var ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  cookie = req.params.cookie;
  if(cookie === undefined) {
  	console.log("no cookies");
  }

  // var trace = new Trace();
  // trace.browserID = undefined;
  // trace.currentTime =
  // trace.lastTime 
  // trace.page = 
  // trace.ip = ipAddr

  console.log(ip);
  console.log(req.headers['http-referer']);
  res.send("console.log('done')");
})

module.exports = router;
