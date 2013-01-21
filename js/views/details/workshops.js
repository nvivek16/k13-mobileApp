define([
	'jquery',
	'underscore',
	'backbone',
	'models/workshopsModel',
	'text!templates/workshops.html',
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
	], function($, _,Backbone,workshopsModel,detailsTemplate)
		{
		var workshopsView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
			this.workshopsModel = new workshopsModel;
			},
		render: function(){
		    var compiledTemplate = _.template(detailsTemplate, workshop);
			$("#loading").hide();
			$("#content").show();
			$(".btn.btn-navbar").toggleClass("collapsed");
			$(".nav-collapse.in.collapse").toggleClass("in").height(0)
			this.e1.html(compiledTemplate);

		}});
		return new workshopsView;
	});
