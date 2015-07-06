define([], function() {
	var constructor = {};
	var viewsPath = MODULES_DIR + "/book/views";
	constructor.init = function($stateProvider) {
		/* abstract-base-state definition to match with auto-futureState convention */
		$stateProvider.state("book", {
			abstract: true,
			template: "<div ui-view></div>",
			url: "/book"
		});
		/* Module states */
		$stateProvider.state("book.index", {
			templateUrl: viewsPath + "/index.html",
			url: "/index",
			controller: "BookIndexCtrl"
		});
	};
	return constructor;
});