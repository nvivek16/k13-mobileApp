define(['jquery',
	'underscore',
	'backbone',
	'views/main',
	'views/details/main',
	],function($,_,Backbone,mainView,detailsView){
		var AppRouter = Backbone.Router.extend({
			routes: {
			
			'events' : 'detailsAction',
			'*actions': 'defaultAction'
			},
			defaultAction: function(actions){
				$("#home").addClass("active");
				mainView.render();
			},
			detailsAction: function(){
				detailsView.render();
				}
		
			});
		var initialize = function(){
		 	var app_router = new AppRouter;
			Backbone.history.start();
			};
		return {
			initialize: initialize
			};
});
