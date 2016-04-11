var tracker = (function() {
	var URL = "https://csci4140-analytics.herokuapp.com/api/jsonp";
	var QUERY_FIELD = "cookie";
	var ID_FIELD = "TrackerID";				// the value is the current time
	var LAST_VISIT_FIELD = "LastVisit";

	return (function () {

		// calculate expiry time: current + 1 year

		var offset = 365 * 24 * 60 * 60 * 1000;
		var now = new Date();
		var expiry = new Date( now.getTime() + offset );

		// tracker cookie string

		if(document.cookie === "") {
			document.cookie = ID_FIELD + "=" + now.getTime() + ";expires=" + expiry.toGMTString();
			document.cookie = LAST_VISIT_FIELD + "=" + now.getTime(); + ";expires=" + expiry.toGMTString();
		}


		var scriptTarget = URL + "?" + QUERY_FIELD + "=" + encodeURIComponent(document.cookie);
		document.cookie = LAST_VISIT_FIELD + "=" + now.getTime(); + ";expires=" + expiry.toGMTString();

		// script preparation and insertion //
		var script = document.createElement("script");
		script.src = scrciptTarget;
		document.getElementsByTagName("body")[0].appendChild(script);
	});
})();

window.addEventListener("load", tracker, false);