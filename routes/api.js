var express = require('express');
var router = express.Router();
var Trace = require('../models/trace');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>STOP</h1>');
});

router.route('/jsonp').get(function(req,res) {
	var ipAddr = (req.headers['x-forwarded-for'] || req.connection.remoteAddress) || "no ip";
  var referer = req.headers['referer'] || "no referer";

  var cookie = req.params.cookie;
  if(cookie === undefined) {
  	var msg = "Problem: no cookie is set";
  	console.log(msg);
	  res.send("console.log('" + msg + "')");
  }
  else {
  	var cookieValue = {};
  	cookie.split('; ').forEach(
  		function(item) {
  			var array = item.split('=');
  			cookieValue[array[0]] = array[1];
  		}
  	);

  	// set up mongo object

	  var trace = new Trace();

	  trace.browserID = cookieValue['TrackerID'];
	  trace.currentTime = (new Date()).getTime();
	  trace.lastTime = parseInt(cookieValue['LastVisit']);
	  trace.page = referer;
	  trace.ip = ipAddr;

	  trace.save(function(err) {
			if(err) {
				console.err(err);
				res.send('console.log("trace cannot be created");');
			}
			else {
				var msg = "trace is created";
				console.log(msg);
				res.send("console.log('" + msg + "');");
			}
		});
  }
})

module.exports = router;
