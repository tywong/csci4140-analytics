var tracker = (function() {
	var URL = "https://csci4140-analytics.herokuapp.com/api/ajax";
	var QUERY_FIELD = "cookie";
	var ID_FIELD = "TrackerID";				// the value is the current time
	var LAST_VISIT_FIELD = "LastVisit";

	return (function () {

		// calculate expiry time: current + 1 year

		var offset = 365 * 24 * 60 * 60 * 1000;
		var now = new Date();
		var expiry = new Date( now.getTime() + offset );

		// tracker cookie string

		if(document.cookie === "" || document.cookie.indexOf(ID_FIELD) === -1) {
			document.cookie = ID_FIELD + "=" + now.getTime() + ";expires=" + expiry.toGMTString();
			document.cookie = LAST_VISIT_FIELD + "=" + now.getTime(); + ";expires=" + expiry.toGMTString();
		}


		var postContent = QUERY_FIELD + "=" + encodeURIComponent(document.cookie);
		document.cookie = LAST_VISIT_FIELD + "=" + now.getTime(); + ";expires=" + expiry.toGMTString();

		// Ajax Call Set up//
		var xhr = new XMLHttpRequest();
		xhr.open("POST", URL, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(postContent);

		xhr.onload = function() {
			console.log(xhr.responseText);
		};
	});
})();

window.addEventListener("load", tracker, false);