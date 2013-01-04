define(['jquery',
	'underscore',
	'backbone',
	'views/main',
	'views/details/category',
	'views/details/eventslist',
	'views/details/event',
	'views/details/map'
	],function($,_,Backbone,mainView,detailsView,eventslistView,eventView,mapView){
		var AppRouter = Backbone.Router.extend({
			routes: {

			'events' : 'categorydetailsAction',
			'categories/:category' : 'eventsdisplayAction', 
			'event/:eventName/displayMap' : 'mapdisplayAction',
			'event/:eventName' : 'eventdetailsAction',
			'*actions': 'defaultAction'
			},
			defaultAction: function(actions){
				$("#home").addClass("active");
				$("#loading").hide();
				mainView.render();
			},
			eventsdisplayAction: function(category)
			{
				console.log(category);
				eventslistView.eventslistModel.displayEvents({
					success: function(eventlist){
					this.eventlist = eventlist;
					console.log(this.eventlist);
					eventslistView.render();
						},
					category: category});
			},
			categorydetailsAction: function(){
				detailsView.categoryModel.displayCategory({
					success: function(category){
					//$("loading").show();
					detailsView.render();
				}
				});		
			
			},
			eventdetailsAction: function(eventName){
				eventView.eventModel.displayEvent({
					success: function(eventdescription){
						eventView.render();
						},
					eventName: eventName
				
					});

			},

			mapdisplayAction: function(eventName){

				mapView.render();
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
