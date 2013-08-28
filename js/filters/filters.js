'use strict';

foodMeApp.filter('price', function(){
	return function(input){
		input = parseInt(input);
		var ret = '';
		for(var i=0; i < input; i++){
			ret += '$';
		}
		return ret;
	}
});

foodMeApp.filter('rating', function(){
	return function(input){
		input = parseInt(input);
		var ret = '';
		for(var i=0; i < input; i++){
			ret += '\u2605';
		}
		return ret;
	}
});