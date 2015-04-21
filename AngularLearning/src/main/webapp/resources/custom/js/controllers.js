angular.module('myApp.controllers', []);

angular.module('myApp.controllers').controller('FinanceController',
		function($scope) {
			$scope.salary = 0;
			$scope.percentage = 0;
			$scope.result = function() {
				return $scope.salary * $scope.percentage * 0.01;
			};
		});

angular.module('myApp.controllers').controller('DateTimeController',
		function($scope) {
			$scope.now = new Date();
			$scope.greeting = "Hello";
		});