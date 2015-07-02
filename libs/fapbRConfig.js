window.BASE_URL = "http://" + window.location.host + window.location.pathname;
window.APP_URL = BASE_URL + "app";
window.GLOBAL_URL = APP_URL + "/global";
window.MODULES_URL = APP_URL + "/appModules";
window.REST_URL = BASE_URL + "rest";

window.createModule = function(moduleName, dependencies) {
	var module;
	try { module = angular.module(moduleName); } catch(e) {  module = angular.module(moduleName, dependencies || []); }
	return module;
};
window.fapbLoadModule = function(moduleName, injectionName) {
	var name = injectionName || "module";
	return {
		name: ['$ocLazyLoad', function ($ocLazyLoad) {
			return $ocLazyLoad.load(moduleName);
		}]
	};
};

var libsURL = BASE_URL + "libs/";
requirejs.config({
	baseUrl: MODULES_URL + "/",
	paths : {
		/* Application core */
		config: APP_URL + "/config",
		applicationStates: APP_URL + "/states",
		applicationControllers: APP_URL + "/controller",
		applicationModules: APP_URL + "/applicationModules",
		factorizator: libsURL + "factorizator",
		GlobalModule: GLOBAL_URL + "/config",

		/* Libraries */
		jquery: libsURL + "jquery",
		bootstrap: libsURL + "bootstrap/bootstrap",
		moment: libsURL + "moment",
		bootbox: libsURL + "bootbox",

		/* Angular libs */
		angular: libsURL + "angular/angular",
		"angular-route": libsURL + "angular/angular-route.min",
		"angular-moment": libsURL + "angular/angular-moment",
		"angular-cookies": libsURL + "angular/angular-cookies.min",
		"angular-resource": libsURL + "angular/angular-resource.min",
		"ui-router": libsURL + "angular/angular-ui-router",
		"ui-router-extras": libsURL + "angular/ct-ui-router-extras",
		lazyLoad: libsURL + "angular/ocLazyLoad"
	},
	shim: {
		bootstrap: { deps: ["jquery"], exports: "bootstrap"},
		bootbox: { deps: ["bootstrap"], exports: "bootbox"}
	}
});