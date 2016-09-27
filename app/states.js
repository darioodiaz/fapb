define([], function() {
	var constructor = {};
	constructor.init = function($stateProvider) {
		$stateProvider.state("index", {
			state: "index",
			url: "/"
		});
	};
	return constructor;
});