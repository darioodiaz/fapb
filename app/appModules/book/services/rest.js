define([], function() {
	var constructor = {};
	constructor.init = function(module) {
		module.service("BookREST", ["$resource", function($resource) {
			var API_REST = REST_URL.concat(YOUR_REST_URL_HERE);
			return $resource(API_REST);
		}]);
	};
	return constructor;
});