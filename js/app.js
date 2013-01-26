define([
	'jquery',
	'underscore',
	'backbone',
	'router'
	], function($, _,Backbone,Router){
		var initialize = function(){
		
		router = Router.initialize();
	};
		return {
		initialize: initialize
	};
	});

