define([], function() {
	var constructor = {};
	constructor.init = function(module) {
		module.service("BookTemplateService", ["$http", "$resource", function($http) {
			var service = {};
			return service;
		}]);
	};
	return constructor;
});