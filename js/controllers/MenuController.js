'use strict';

foodMeApp.controller('MenuController',function Menucontroller($scope, $routeParams, Restaurant, customer){
	$scope.menu = Restaurant.get({'restaurantId' : $routeParams.restaurantId});
	$scope.customer = customer;
});