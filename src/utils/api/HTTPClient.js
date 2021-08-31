
import superagent from "superagent";


var HTTPClient = {

	wrapper: function (inner, type = 0) {
		return function (error, response) {
			// Network.completed();

			if (!inner) return;
			// chance to wrap and call original

			var parsed = null;
			if (response && response.text && response.text.length > 0) {
				try {
					parsed = JSON.parse(response.text);
				} catch (e) {
					if (type === 3) {
						// console.log(response);
						parsed = response.text;
					} else {
						parsed = null;
					}
					// TODO: some other error?
					// console.log("HTTPClient could not parse:\n\n" + response.text);
				}
			}

			var errorObj = null;
			var valueObj = null;

			if (error) {
				// error.status => 422
				console.log(error);
				errorObj = {};
				if (error.status) {
					errorObj.status = error.status; // 422
				} else {
					errorObj.status = 520; // Unknown error
				}
				if (error?.response?.body) {
					errorObj.response = error.response.body;
				} else {
					errorObj.response = "No message";
				}
				errorObj.errors = [];
				if (parsed && parsed.error) {
					errorObj.message = parsed.error;
				}
				if (!errorObj.message) {
					errorObj.message = "Server Error: " + errorObj.status;
				}
				console.log("http error (" + errorObj.status + "): " + errorObj.message);
			} else {
				valueObj = parsed;
			}
			inner(errorObj, valueObj);
		};
	},


	fetch: function (req, callback, type = 0) {
		req.end(this.wrapper(callback, type));
	},

	url: function (path) {
		var host = "https://dmapi.omakle.com";
		//  var host = "http://localhost:5000";
		return host + "/" + path;
	},


	post: function (path, values, callback) {
		var req = superagent.post(this.url(path));
		if (values) {
			req = req.send(values);
		}

		this.fetch(req, callback);
	},


	put: function (path, values, callback) {
		var req = superagent.put(this.url(path));
		if (values) {
			req = req.send(values);
		}
		this.fetch(req, callback);
	},

	get: function (path, params, callback) {
		var req = superagent.get(this.url(path));
		if (params) {
			req = req.query(params);
		}
		this.fetch(req, callback);
	},

	delete: function (path, params, callback) {
		var req = superagent.delete(this.url(path));
		if (params) {
			req = req.query(params);
		}
		this.fetch(req, callback);
	},
};

export default HTTPClient;
