define(['jquery',
	'underscore',
	'backbone',
	'views/main',
	'views/details/category',
	'views/details/eventslist',
	'views/details/event',
	'views/details/map',
	'views/details/newsfeed',
	'views/details/workshops',
	'views/details/lectures',
	'views/details/workshop',
	'views/details/lecture',
	'views/details/sponsor'
	],function($,_,Backbone,mainView,detailsView,eventslistView,eventView,mapView,newsfeedView,workshopsView,lecturesView,workshopView,lectureView,sponsorView){
		var AppRouter = Backbone.Router.extend({
			routes: {

			'events' : 'categorydetailsAction',
			'categories/:category' : 'eventsdisplayAction', 
			'event/:eventName/displayMap' : 'mapdisplayAction',
			'event/:eventName' : 'eventdetailsAction',
			'workshops' : 'workshopsdisplayAction',
			'guestLectures' : 'lecturesdisplayAction',
			'workshops/:eventName' : 'workshopdetailsAction',
			'lectures/:lecture' : 'lecturedetailsAction',
			'workshop/:eventName/displayMap' : 'mapdisplayAction',
			'lecture/:eventName/displayMap' : 'mapdisplayAction',
			'about' : 'defaultAction',
			'sponsors' : 'sponsorsDisplayAction',
			'*actions':'newsfeedAction'

			},
			

			
			
			defaultAction: function(actions){
				
				$("#loading").hide();
				mainView.render();

			},
			newsfeedAction: function()
			{
				$("#home").addClass("active");
				$("#content").hide();
				$("#loading").show();

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
			workshopsdisplayAction: function(){
				$("#content").hide();
				$("#loading").show();
				workshopsView.workshopsModel.displayWorkshop({
					success: function(workshop){
					workshopsView.render();
				}
				});		
			
			},
			lecturesdisplayAction: function(){
				$("#content").hide();
				$("#loading").show();
				lecturesView.lecturesModel.displayLecture({
					success: function(lecture){
					lecturesView.render();
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

			workshopdetailsAction: function(eventName){
				$("#content").hide();
				$("#loading").show();
				workshopView.workshopModel.displayWorkshop({
					success: function(eventdescription){
						workshopView.render();
						},
					eventName: eventName
				
					});

			},

			lecturedetailsAction: function(eventName){
				$("#content").hide();
				$("#loading").show();
				lectureView.lectureModel.displayLecture({
					success: function(eventdescription){
						lectureView.render();
						},
					eventName: eventName
				
					});

			},
			mapdisplayAction: function(eventName){

				mapView.render();
			},

			sponsorsDisplayAction : function(){

				$("#content").hide();
				$("#loading").show();
				sponsorView.render();

			}
			});
		var initialize = function(){
		 	 app_router = new AppRouter;
		 	
			Backbone.history.start();

			};
		return {
			initialize: initialize
			};
});
