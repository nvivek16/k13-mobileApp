define([
	'jquery',
	'underscore',
	'backbone',
	'models/lectureModel',
	'text!templates/lecture.html',
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
	], function($, _,Backbone,lectureModel,detailsTemplate)
		{
		var lectureView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
			this.lectureModel = new lectureModel;
					
			},

		render: function(){
			console.log(eventdescription);		       
			var compiledTemplate = _.template(detailsTemplate, eventdescription);
	//		console.log(compiledTemplate);
			$("#loading").hide();
			$("#content").show();
			this.e1.html(compiledTemplate);
		}});
		return new lectureView;
	});
