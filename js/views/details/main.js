define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/details.html',
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
	], function($, _,Backbone,detailsTemplate)
		{
		var detailsView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
		},
		render: function(){
			var data = {};
			var compiledTemplate = _.template(detailsTemplate, data);
			console.log(compiledTemplate);
			this.e1.html(compiledTemplate);
		}});
		return new detailsView;
	});
