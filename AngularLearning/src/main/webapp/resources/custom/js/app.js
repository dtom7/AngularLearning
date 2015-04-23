angular.module('myApp', [ 'myApp.controllers', 'ngRoute' ]);

angular.module('myApp').config(function($routeProvider, $locationProvider) {
	console.log('config ..');
	$routeProvider.when('/view1', {
		controller : 'Controller1',
		templateUrl : 'resources/custom/views/view1.html	'
	}).when('/view2', {
		controller : 'Controller2',
		templateUrl : 'resources/custom/views/view2.html	'
	});
	//$locationProvider.html5Mode(true);
});