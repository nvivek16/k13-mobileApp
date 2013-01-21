define([
	'jquery',
	'underscore',
	'backbone',
	'models/lecturesModel',
	'text!templates/lectures.html',
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
	], function($, _,Backbone,lecturesModel,detailsTemplate)
		{
		var lecturesView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
			this.lecturesModel = new lecturesModel;
			},
		render: function(){
		    var compiledTemplate = _.template(detailsTemplate, lecture);
			console.log(compiledTemplate);
			$("#loading").hide();
			$("#content").show();
			$(".btn.btn-navbar").toggleClass("collapsed");
			$(".nav-collapse.in.collapse").toggleClass("in").height(0)
			this.e1.html(compiledTemplate);

		}});
		return new lecturesView;
	});
