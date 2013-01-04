define([
	'jquery',
	'underscore',
	'backbone',
	'models/eventslistModel',
	'text!templates/eventslist.html',
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
	], function($, _,Backbone,eventslistModel,detailsTemplate)
		{
		var eventslistView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
			this.eventslistModel = new eventslistModel;
				
			},
		render: function(){
		       
			console.log(eventslist);
			var compiledTemplate = _.template(detailsTemplate, eventslist);
			console.log(compiledTemplate);
			$("#loading").hide();
			$("#content").show();
			this.e1.html(compiledTemplate);
		}});
		return new eventslistView;
	});
