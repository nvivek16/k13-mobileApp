define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/sponsor.html',
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
		var sponsorView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
		},
		render: function(){

			var data = {};
			var compiledTemplate = _.template(aboutTemplate, data);
			$("#loading").hide();
			$("#content").show();
			$(".btn.btn-navbar").toggleClass("collapsed");
			$(".nav-collapse.in.collapse").toggleClass("in").height(0);
			this.e1.html(compiledTemplate);
		}});
		return new sponsorView;
	});
