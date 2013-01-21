define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_,Backbone){

	var workshopModel = Backbone.Model.extend({
	baseurl : 'http://localhost:3000/workshops/',

	displayWorkshop : function(options)
	{
		var success = options.success;
		var eventName = options.eventName;
		var model = this;
		console.log(eventName);
		 var url = this.baseurl+eventName +".json?callback=?";
		console.log(url);
		$.getJSON(url,function(data)
			{
			eventdescription = data;
			console.log(data);
			success(model,eventdescription);
			});


			}
	});
	return workshopModel;
});
