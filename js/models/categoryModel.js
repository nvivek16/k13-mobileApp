define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_,Backbone){

	var categoryModel = Backbone.Model.extend({
	baseurl : '../../json/eventlist.json',
	displayCategory : function(options)
	{
		var success = options.success;
		var model = this;
		$.getJSON("http://localhost:3000/categories.json?callback=?",function(data)
		
			{
			category = data;
			console.log(category);
			success(model,category);
			});


			}
	});
	return categoryModel;
});
