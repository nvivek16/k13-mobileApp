define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/about.html',
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
	], function($, _,Backbone,aboutTemplate)
		{
		var mainView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
		},
		render: function(){
			var data = {};
			var compiledTemplate = _.template(aboutTemplate, data);
			$(".btn.btn-navbar").toggleClass("collapsed");
			$(".nav-collapse.in.collapse").toggleClass("in").height(0);
			$("#loading").hide();
			$("#content").show();
			this.e1.html(compiledTemplate);
		}});
		return new mainView;
	});
