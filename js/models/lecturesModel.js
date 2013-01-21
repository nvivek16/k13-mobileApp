define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_,Backbone){

	var lecturesModel = Backbone.Model.extend({
	displayLecture : function(options)
	{
		var success = options.success;
		var model = this;
		$.getJSON("http://gentle-gorge-9059.herokuapp.com/lectures.json?callback=?",function(data)
		
			{
			lecture = data;
			success(model,lecture);
			});


			}
	});
	return lecturesModel;
});
