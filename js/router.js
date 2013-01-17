define(['jquery',
	'underscore',
	'backbone',
	'views/main',
	'views/details/category',
	'views/details/eventslist',
	'views/details/event',
	'views/details/map',
	'views/details/newsfeed'
	],function($,_,Backbone,mainView,detailsView,eventslistView,eventView,mapView,newsfeedView){
		var AppRouter = Backbone.Router.extend({
			routes: {

			'events' : 'categorydetailsAction',
			'categories/:category' : 'eventsdisplayAction', 
			'event/:eventName/displayMap' : 'mapdisplayAction',
			'event/:eventName' : 'eventdetailsAction',
			'*actions':'newsfeedAction'
			//'*actions': 'defaultAction'
			},
			defaultAction: function(actions){
				
				$("#loading").hide();
				mainView.render();
			},
			newsfeedAction: function()
			{
				$("#home").addClass("active");
				$("#loading").hide();
				newsfeedView.newsfeedModel.displayFeed({
					success: function(newsfeed){
					newsfeedView.render();
				}
						});
					},
			eventsdisplayAction: function(category)
			{
				console.log(category);
				$("#content").hide();
				$("#loading").show();	
				eventslistView.eventslistModel.displayEvents({
					success: function(eventlist){
					eventslistView.render();
						},
					category: category});
			},
			categorydetailsAction: function(){
				$("#content").hide();
				$("#loading").show();
				detailsView.categoryModel.displayCategory({
					success: function(category){
					detailsView.render();
				}
				});		
			
			},
			eventdetailsAction: function(eventName){
				$("#content").hide();
				$("#loading").show();
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
