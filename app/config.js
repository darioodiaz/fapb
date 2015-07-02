define(["applicationStates", "applicationControllers", "applicationModules", "lazyLoad", "ui-router", "angular-route", "angular-cookies", "angular-resource", "ui-router-extras", "GlobalModule"], function(moduleStates, controller, applicationModules) {

	var app = angular.module("fapbApp", ['ui.router', 'oc.lazyLoad', "ngCookies", "ngResource", "ct.ui.router.extras", "GlobalModule"]);
	controller.init(app);
	
	app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', "$futureStateProvider", 
	   function ($stateProvider,   $urlRouterProvider,   $ocLazyLoadProvider,   $futureStateProvider) {
		moduleStates.init($stateProvider);
		$urlRouterProvider.otherwise(function() {
			console.warn("The requested url/state isnt defined.");
			return "/";
		});
		$ocLazyLoadProvider.config({ debug: true, jsLoader: requirejs });
		var lazyLoadStateFactory = ["$q", "$ocLazyLoad", "futureState", function ($q, $ocLazyLoad, futureState) {
			var deferred = $q.defer();
			if (!futureState.module) {
				console.log("The futureState doesn't provide a module to do lazyLoad. Provide a module");
				deferred.reject("Missing futureState's module property");
				return;
			}
			var moduleConfig = $ocLazyLoad.getModuleConfig(futureState.module);
			createModule(futureState.module, moduleConfig.dependencies);
			$ocLazyLoad.load(futureState.module)
			.then(function success() {
					//TODO: obtener el futureState y usarlo como resolve
					deferred.resolve(undefined);
				}, function error() {
					deferred.reject("Error loading future state");
				}
			);
			return deferred.promise;
		}];
        $futureStateProvider.stateFactory('lazyLoad', lazyLoadStateFactory);
        window.futureStateProvider = $futureStateProvider;
	}]);

	app.run(["$rootScope", "$ocLazyLoad", function($root, $lazyLoad) {
		applicationModules.init($lazyLoad);
	}]);

	return {};
});