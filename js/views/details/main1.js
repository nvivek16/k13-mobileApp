define([
	'jquery',
	'underscore',
	'backbone',
	'models/eventModel',
	'text!templates/details2.html',
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
	], function($, _,Backbone,eventlistModel,detailsTemplate)
		{
		var eventsView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
			this.eventlistModel = new eventlistModel;
			},
		render: function(){
		       
			console.log(eventlist);
			var compiledTemplate = _.template(detailsTemplate, eventlist);
			console.log(compiledTemplate);
			this.e1.html(compiledTemplate);
		}});
		return new eventsView;
	});
