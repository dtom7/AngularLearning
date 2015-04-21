angular.module('myApp.controllers', []);

angular.module('myApp.controllers').controller('FinanceController',
		function($rootScope, $scope) {
			$scope.salary = 0;
			$scope.percentage = 0;
			$scope.result = function() {
				return $scope.salary * $scope.percentage * 0.01;
			};
			$scope.$watch('percentage', function(newValue, oldValue) {
				console.log('watch: ' + newValue + ' -- ' + oldValue);
				if (newValue == 100) {
					window.alert('100%');
					$scope.salary = 100;
				}
			});
			$scope.$watch(function() {
				// do something here
				console.log('called in a digest cycle');
				return;
			});
		});

var Task = function(description) {
	this.done = 'N';
	this.description = description;
};

angular.module('myApp.controllers').controller('TODOController',
		[ '$scope', function($scope) {
			$scope.newTaskDescription = '';
			$scope.taskList = [];
			$scope.addTask = function() {
				if ($scope.newTaskDescription.length > 0) {
					$scope.taskList.push(new Task($scope.newTaskDescription));
					$scope.newTaskDescription = '';
				}
			};
			$scope.deleteTask = function(task) {
				var removeIndex = 0;
				for (var i = 0; i < $scope.taskList.length; i++) {
					if ($scope.taskList[i].description === task.description) {
						removeIndex = i;
					}
				}
				if (removeIndex > -1) {
					$scope.taskList.splice(removeIndex, 1);
				}
			};

		} ]);