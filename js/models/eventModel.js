define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_,Backbone){

	var eventModel = Backbone.Model.extend({
	baseurl : 'https://shrouded-cove-5478.herokuapp.com/events/',
	displayEvent : function(options)
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
	return eventModel;
});
