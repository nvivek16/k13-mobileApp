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
		$.getJSON("http://kurukshetra13.herokuapp.com/updates.json?callback=?",function(data)
		
			{
			newsfeed = data;
			console.log(newsfeed)
			success(model,newsfeed);
			});


			}
	});
	return newsfeedModel;
});
