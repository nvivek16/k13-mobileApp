define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_,Backbone){

	var workshopsModel = Backbone.Model.extend({
	displayWorkshop : function(options)
	{
		var success = options.success;
		var model = this;
		$.getJSON("http://gentle-gorge-9059.herokuapp.com/workshops.json?callback=?",function(data)
		
			{
			workshop = data;
			success(model,workshop);
			});


			}
	});
	return workshopsModel;
});
