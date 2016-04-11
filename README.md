# Analytics Example For CSCI 4140

The live system of this analytics example is hosted in [https://csci4140-analytics.herokuapp.com/](https://csci4140-analytics.herokuapp.com/)

- [https://csci4140-analytics.herokuapp.com/api/traces](https://csci4140-analytics.herokuapp.com/api/traces): to see all the trace records.

- [https://csci4140-analytics.herokuapp.com/js/trace_jsonp.js](https://csci4140-analytics.herokuapp.com/js/trace_jsonp.js): this script file uploads the cookies planted using JSONP. To include the script:

	```
	<script src="https://csci4140-analytics.herokuapp.com/js/trace_jsonp.js"></script>
	```

	Then, the analytics system can trace how a particular browser visits such a page.

- [https://csci4140-analytics.herokuapp.com/js/trace_ajax.js](https://csci4140-analytics.herokuapp.com/js/trace_ajax.js): this script file uploads the cookies planted using __POST AJAX call__. To include the script:

	```
	<script src="https://csci4140-analytics.herokuapp.com/js/trace_ajax.js"></script>
	```

	Then, the analytics system can trace how a particular browser visits such a page. By the way, on the server side, we allow such a upload by setting the CORS header: `Access-Control-Allow-Origin: *`.


---

Written by [Dr. WONG Tsz Yeung](http://www.cse.cuhk.edu.hk/~tywong)
