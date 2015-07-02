define([], function() {
	var constructor = {};
	var viewsPath = MODULES_DIR + "/Test/views";
	constructor.init = function($stateProvider) {
		/* abstract-base-state definition to match with auto-futureState convention */
		$stateProvider.state("test", {
			abstract: true,
			template: "<div ui-view></div>",
			url: "/test"
		});
		/* Module states */
		$stateProvider.state("test.index", {
			templateUrl: viewsPath + "/index.html",
			url: "/index",
			controller: "TestIndexCtrl"
		});
	};
	return constructor;
});