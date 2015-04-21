angular.module('myApp.controllers', []);

angular.module('myApp.controllers').controller('FinanceController',
		function($rootScope, $scope) {
			$scope.salary = 0;
			$scope.percentage = 0;
			$scope.result = function() {
				return $scope.salary * $scope.percentage * 0.01;
			};
			console.log($scope.__proto__ === $rootScope);
			console.log($rootScope.__proto__.constructor.name);
			console.log($rootScope.__proto__.__proto__ === Object.prototype);
		});

angular.module('myApp.controllers').controller('DateTimeController',
		function($scope) {
			$scope.now = new Date();
			$scope.greeting = "Hello";
		});