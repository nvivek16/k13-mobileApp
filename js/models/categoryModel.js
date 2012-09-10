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
		$.getJSON("file:///home/vivekanandhan/Desktop/k13!/json/eventlist.json",function(data)
			{
			category = data.categoryList;
			console.log(category);
			success(model,category);
			});
	
	
			}
	});
	return categoryModel;
});
