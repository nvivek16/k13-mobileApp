define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_,Backbone){

	var newsfeedModel = Backbone.Model.extend({
	
	displayFeed : function(options)
	{
		var success = options.success;
		var model = this;
		$.getJSON("http://gentle-gorge-9059.herokuapp.com/updates.json?callback=?",function(data)
		
			{
			newsfeed = data;
			console.log(newsfeed)
			success(model,newsfeed);
			});


			}
	});
	return newsfeedModel;
});
