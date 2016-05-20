angular.module('nodeTodo', [])

	.controller('mainController', function($scope, $http) {

		$scope.formData = {};
		$scope.todoData = {};

		//get all the todos
		$http.get('/api/v1/todos')
			.success(function(data) {
				$scope.todoData = data;
				console.log(data);
			})
			.error(function(error) {
				console.log('Error: ' + error);
			});

		$scope.createTodo = function(todoID) {
			$http.post('/api/v1/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.todoData = data;
				console.log(data);
			})
			.error(function(error) {
				console.log('Error: ' + error);
			});
		}

		$scope.deleteTodo = function(todoID) {
			$http.delete('/api/v1/todos/' + todoID)
			.success(function(data) {
				$scope.todoData = data;
				console.log(data);
			})
			.error(function(error) {
				console.log('Error: ' + error);
			});
		}
	})