define([
	'jquery',
	'underscore',
	'backbone',
	'models/newsfeedModel',
	'text!templates/newsfeed.html',
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
	], function($, _,Backbone,newsfeedModel,detailsTemplate)
		{
		var detailsView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
			this.newsfeedModel = new newsfeedModel;
			},
		render: function(){
		        
			var compiledTemplate = _.template(detailsTemplate, newsfeed);
			console.log(compiledTemplate);
			$("#loading").hide();
			$("#content").show();
			this.e1.html(compiledTemplate);

		}});
		return new detailsView;
	});
