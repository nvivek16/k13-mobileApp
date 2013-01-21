define([
	'jquery',
	'underscore',
	'backbone',
	'models/workshopModel',
	'text!templates/workshop.html',
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
	], function($, _,Backbone,workshopModel,detailsTemplate)
		{
		var workshopView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
			this.workshopModel = new workshopModel;
					
			},

		render: function(){
					       
			var compiledTemplate = _.template(detailsTemplate, eventdescription);
	//		console.log(compiledTemplate);
			$("#loading").hide();
			$("#content").show();
			this.e1.html(compiledTemplate);
		}});
		return new workshopView;
	});
