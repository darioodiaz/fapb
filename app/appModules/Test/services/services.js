define([], function() {
	var constructor = {};
	constructor.init = function(module) {
		module.service("TestTemplateService", ["$http", "$resource", function($http, $resource) {
			var service = {};
			return service;
		}]);
	};
	return constructor;
});