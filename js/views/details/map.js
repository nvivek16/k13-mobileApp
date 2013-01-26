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
			var map_ordinates = {"vivek audi" : new google.maps.LatLng(13.011509,80.236491),"mba audi" : "Management Studies Block, Ranjith Rd, Chennai, Tamil Nadu, India", "hm hall" : new google.maps.LatLng(13.011089,80.232905 ), "Sivalingam Hall" :new google.maps.LatLng(13.01159,80.235727),
"Examination centre" : new google.maps.LatLng(13.008781,80.236432),"Main Building" : new google.maps.LatLng(13.010929,80.235515),"SNH" : new google.maps.LatLng(13.012215,80.235482),"Alumni Centre" :new google.maps.LatLng(13.012727,80.236695), "Turing Hall" : new google.maps.LatLng(13.01256,80.235853),"Maxwell Auditorium" : new google.maps.LatLng(13.01257,80.235273),"Ground" : new google.maps.LatLng(13.011635,80.237108),"ECE Department" : new google.maps.LatLng(13.01257,80.235273),"RCC Lab" : new google.maps.LatLng(13.01049,80.23728),"Hall of Guines" : new google.maps.LatLng(13.011828,80.23456),"Cs Department" : new google.maps.LatLng(13.01256,80.235853),"EEE Department" : new google.maps.LatLng(13.011157,80.234544),"Building Tech Department" : new google.maps.LatLng(13.013929,80.233846),"Mechanical Department" : new google.maps.LatLng(13.011185,80.232634)
}; 	
			var request = {
        	origin: initialLocation, 
        	destination: map_ordinates[$("#place").text()],
        	travelMode: google.maps.DirectionsTravelMode.DRIVING
        	};
			directionsService.route(request, function(response, status) {
       
	 		if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
          	} 
          	$('html,body').animate(
          	{

          		scrollTop: $("#map").offset().top
          	},'slow');
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