define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_,Backbone){

	var lectureModel = Backbone.Model.extend({
	baseurl : 'http://kurukshetra13.herokuapp.com/lectures/',

	displayLecture : function(options)
	{
		var success = options.success;
		var eventName = options.eventName;
		var model = this;
		console.log(eventName);
		 var url = this.baseurl+eventName +".json?callback=?";
		console.log(url);
		$.getJSON(url,function(data)
			{
			eventdescription = data;
			console.log(data);
			success(model,eventdescription);
			});


			}
	});
	return lectureModel;
});
