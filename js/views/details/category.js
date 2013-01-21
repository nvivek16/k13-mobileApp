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
			},
		render: function(){
		        console.log(category);
			var compiledTemplate = _.template(detailsTemplate, category);
			console.log(compiledTemplate);
			$("#loading").hide();
			$("#content").show();
			$(".btn.btn-navbar").toggleClass("collapsed");
			$(".nav-collapse.in.collapse").toggleClass("in").height(0);

		
			this.e1.html(compiledTemplate);

		}});
		return new detailsView;
	});
