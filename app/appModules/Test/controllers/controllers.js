define([], function() {
	var constructor = {};
	constructor.init = function(module) {
		module.controller("TestIndexCtrl", ["$state", "$stateParams", "$scope", function($state, $stateParams, $scope) {
		}]);
	};
	return constructor;
});