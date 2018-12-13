angular.module('app', ['ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'MainController',
			controllerAs: 'mainCtrl'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});