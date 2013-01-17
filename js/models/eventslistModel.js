define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_,Backbone){

	var eventslistModel = Backbone.Model.extend({

	baseurl : 'http://localhost:3000/categories/',

	displayEvents : function(options)
	{
		var success = options.success;
		var category = options.category;
		var model = this;
		var url = this.baseurl+category+".json?callback=?";
		console.log(url);
		$.getJSON(url,function(data)
			{
			console.log(data);
			eventslist = data;
		 	success(model,eventslist);
			});


			}
	});
	return eventslistModel;
});
