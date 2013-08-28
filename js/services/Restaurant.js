'use strict';

foodMeApp.factory('Restaurant', function($resource){
	return $resource('/api/restaurant/:restaurantId', {restaurantId: '@id'});
});