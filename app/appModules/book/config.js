define(["book/states", "book/controllers/controllers", "book/services/services"], function(states, controllers, services) {
	var module = angular.module("book");
	controllers.init(module);
	services.init(module);
	module.config(["$stateProvider", function($stateProvider) {
		states.init($stateProvider);
	}]);
	return {};
});