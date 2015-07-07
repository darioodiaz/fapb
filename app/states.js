define([], function() {
	var constructor = {};
	constructor.init = function($stateProvider) {
		$stateProvider.state({
			state: "index",
			url: "/"
		});
	};
	return constructor;
});