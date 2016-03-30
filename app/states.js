define([], function() {
	var constructor = {};
	constructor.init = function($stateProvider) {
		$stateProvider.state("index", {
			url: "/"
		});
	};
	return constructor;
});