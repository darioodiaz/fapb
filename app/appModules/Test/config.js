define(["Test/states", "Test/controllers/controllers", "Test/services/services"], function(states, controllers, services) {
	var module = angular.module("Test");
	controllers.init(module);
	services.init(module);
	module.config(["$stateProvider", function($stateProvider) {
		states.init($stateProvider);
	}]);
	return {};
});