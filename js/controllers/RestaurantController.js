'use strict';

foodMeApp.controller('RestaurantController',
	function RestaurantController($scope, customer, $location, Restaurant){

		//Redirect if user is not registered
		if(!customer.address){
			$location.path( "/customer" );
		}

		$scope.restaurants = Restaurant.query();
});