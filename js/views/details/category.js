define([
	'jquery',
	'underscore',
	'backbone',
	'models/categoryModel',
	'text!templates/category.html',
	'tooltip',
	'collapse',
	'popover',
	'tab',
	'dropdown',
	'bootTransition',
	'bootAlert',
	'bootScrollspy',
	'modal',
	'bootButton'
	], function($, _,Backbone,categoryModel,detailsTemplate)
		{
		var detailsView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
			this.categoryModel = new categoryModel;
			$("#loading").show();
			},
		render: function(){
		        console.log(category);
			var compiledTemplate = _.template(detailsTemplate, category);
			console.log(compiledTemplate);
			$("#loading").hide();
			this.e1.html(compiledTemplate);

		}});
		return new detailsView;
	});
