define([
	'jquery',
	'underscore',
	'backbone',
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
	], function($, _,Backbone)
		{
		var mapView = Backbone.View.extend({
		e1: $("#content"),
		initialize: function(){
		},
	 	success : function(position){
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			console.log(latitude);
			console.log(longitude);
			var initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			var map_ordinates = {"vivek audi" : new google.maps.LatLng(13.011509,80.236491),"mba audi" : "Management Studies Block, Ranjith Rd, Chennai, Tamil Nadu, India", "hm hall" : new google.maps.LatLng(13.011089,80.232905 )}; 	
			var request = {
        	origin: initialLocation, 
        	destination: map_ordinates[$("#place").text()],
        	travelMode: google.maps.DirectionsTravelMode.DRIVING
        	};
			directionsService.route(request, function(response, status) {
       
	 		if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
          	} 
		});
	},
	 failure : function(){
		alert("sorry could not find u");
	},
	render: function(){
/*			console.log(eventdescription);		       
			var compiledTemplate = _.template(detailsTemplate, eventdescription);
			console.log(compiledTemplate);
			this.e1.html(compiledTemplate);
*/
			//console.log(gmaps);
			 directionsService = new google.maps.DirectionsService();
     		 directionsDisplay = new google.maps.DirectionsRenderer();
     		var map = new google.maps.Map(document.getElementById('map'), {
       					zoom:7,
       					mapTypeId: google.maps.MapTypeId.ROADMAP
     		});
     		directionsDisplay.setMap(map);
    		directionsDisplay.setPanel(document.getElementById('panel'));
    		if(navigator.geolocation)
				{
					navigator.geolocation.getCurrentPosition(this.success,this.failure);
				}
			
			
	}});

	return new mapView;
});