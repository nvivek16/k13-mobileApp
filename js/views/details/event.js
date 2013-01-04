define([
	'jquery',
	'underscore',
	'backbone',
	'models/eventModel',
	'text!templates/event.html',
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
	], function($, _,Backbone,eventModel,detailsTemplate)
		{
		var eventView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
			this.eventModel = new eventModel;
			$("#loading").show();			
			},

		render: function(){
			console.log(eventdescription);		       
			var compiledTemplate = _.template(detailsTemplate, eventdescription);
	//		console.log(compiledTemplate);
			$("#loading").hide();
			this.e1.html(compiledTemplate);
		}});
		return new eventView;
	});
