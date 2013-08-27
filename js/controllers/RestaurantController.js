'use strict';

foodMeApp.controller('RestaurantController',
	function RestaurantController($scope, customer, $location, $http){

		//Redirect if user is not registered
		if(!customer.address){
			$location.path( "/customer" );
		}

		$http.get('/api/restaurant').then(function(response){
			console.log(response);
			$scope.restaurants = response.data;
		});
});