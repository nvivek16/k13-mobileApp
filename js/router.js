define(['jquery',
	'underscore',
	'backbone',
	'views/main',
	'views/details/main',
	'views/details/main1',
	],function($,_,Backbone,mainView,detailsView,eventsView){
		var AppRouter = Backbone.Router.extend({
			routes: {

			'events' : 'detailsAction',
			'eventlist/:event' : 'eventdisplayAction',					'*actions': 'defaultAction'
			},
			defaultAction: function(actions){
				$("#home").addClass("active");
				mainView.render();
			},
			eventdisplayAction: function(event)
			{
				eventsView.eventlistModel.displayEvents({
					success: function(eventlist){
					this.eventlist = eventlist;
					console.log(this.eventlist);
					eventsView.render();
						},
					category: event});
			},
			detailsAction: function(){
				detailsView.categoryModel.displayCategory({
					success: function(category){
					detailsView.render();
				}
				});		
			
			}});
		var initialize = function(){
		 	var app_router = new AppRouter;
			Backbone.history.start();
			};
		return {
			initialize: initialize
			};
});
