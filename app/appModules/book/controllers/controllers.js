define([], function() {
	var constructor = {};
	constructor.init = function(module) {
		module.controller("BookIndexCtrl", ["$state", "$stateParams", "$scope", function($state, $stateParams, $scope) {
		}]);
	};
	return constructor;
});