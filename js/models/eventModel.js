define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_,Backbone){
	
	var eventlistModel = Backbone.Model.extend({
	baseurl : '../../json/eventlist.json',
	displayEvents : function(options)
	{	
		var success = options.success;
		var category = options.category;
		var model = this;
		$.getJSON("file:///home/vivekanandhan/Desktop/k13!/json/eventlist.json",function(data)
			{
			console.log(category);
		 	var eventlist = data[category];
			success(eventlist);
			});
		
	
			}
	});
	return eventlistModel;
});
