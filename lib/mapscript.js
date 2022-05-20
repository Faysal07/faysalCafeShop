$(window).load(function(){
	
	
//Masonry Blog
	var $container = $('.blog-posts-content');
	$container.isotope({
		 masonry: {	
	  },
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		},	
	});
  




  
//Google Map					
	/*var latlng = new google.maps.LatLng(45.738028,21.224535);
	var settings = {
		zoom: 17,
		center: new google.maps.LatLng(25.188122, 55.25851740000007), mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		scrollwheel: false,
		draggable: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: false,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	
		
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
	
	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h3 id="firstHeading" class="firstHeading">NEWAVE</h3>'+
		'<div id="bodyContent">'+
		'<p>Here we are. Come to drink a coffee!</p>'+
		'</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	var companyImage = new google.maps.MarkerImage('images/marker.png',
		new google.maps.Size(58,63),<!-- Width and height of the marker -->
		new google.maps.Point(0,0),
		new google.maps.Point(35,20)<!-- Position of the marker -->
	);
	
	
	
	var companyPos = new google.maps.LatLng(25.188122, 55.25851740000007);
	
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,               
		title:"Creative News",
		zIndex: 3});
	
	
	
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});
*/
});

var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
directionsDisplay = new google.maps.DirectionsRenderer();
var headquarters = new google.maps.LatLng(25.188122,55.25851740000007);
var myOptions = {
zoom:17,
mapTypeId: google.maps.MapTypeId.ROADMAP,
center: headquarters,
mapTypeControl: true,
scrollwheel: false,
mapMaker: true,
draggable: true,
mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
navigationControl: true,
navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
}
map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

// Add A Marker For Our Headquarters
var companyMarker = new google.maps.Marker({
position: headquarters,
map: map,
animation: google.maps.Animation.DROP,
title: "Ahura Marketing Services",
zIndex:1
});

directionsDisplay.setMap(map);

// Info window trigger function 
var contentString = '<div id="content">'+
		'<div class="gm-title"><h5>Greenhouse Real Estate</h5><div>'+
		'<div class="gm-basicinfo" style="font-size:10px; height:50px;"><div class="gm-addr">'+
		'Single Business Tower, Sheikh Zayed Road <br>182866 Dubai</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});	
	//google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
		google.maps.event.addDomListener(window, 'resize', initialize);
		google.maps.event.addDomListener(window, 'load', initialize);
	//});
} 

// Calculate the route
function calcRoute() {
var start = document.getElementById("start").value;
var end = new google.maps.LatLng(25.188122,55.25851740000007);
var selectedMode = document.getElementById('mode').value;
var request = {
origin:start,
destination:end,
travelMode: google.maps.TravelMode[selectedMode]
};

directionsService.route(request, function(response, status) {
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay.setDirections(response);
}
});

var endMarker = new google.maps.Marker({
position: end,
map: map,
});
}








   
  jQuery(document).ready(function($){     
// Portfolio Isotope
	var container = $('#portfolio-wrap');	
	

	container.isotope({
		animationEngine : 'best-available',
	  	animationOptions: {
	     	duration: 200,
	     	queue: false
	   	},
		layoutMode: 'fitRows'
	});	

	$('#filters a').click(function(){
		$('#filters a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
	  	container.isotope({ filter: selector });
        setProjects();		
	  	return false;
	});
		
		
		function splitColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			
			
			if (winWidth > 1024) {
				columnNumb = 4;
			} else if (winWidth > 900) {
				columnNumb = 2;
			} else if (winWidth > 479) {
				columnNumb = 2;
			} else if (winWidth < 479) {
				columnNumb = 1;
			}
			
			return columnNumb;
		}		
		
		function setColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = splitColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);
			
			container.find('.portfolio-item').each(function () { 
				$(this).css( { 
					width : postWidth + 'px' 
				});
			});
		}		
		
		function setProjects() { 
			setColumns();
			container.isotope('reLayout');
		}		
		
		container.imagesLoaded(function () { 
			setColumns();
		});
		
	
		$(window).bind('resize', function () { 
			setProjects();			
		});

});





















$(window).load(function() {
	
	
	

	
	
	// Project Page Expander
	
	(function(){
	  
		  var container = $( "#project-page-holder" );
		  var $items = $('#portfolio-wrap .open-project-link');
		  index = $items.length;
		  $('#portfolio-wrap .open-project-link').click(function(){
	
		  if ($(this).hasClass('active')){
		  } else 
		  { lastIndex = index;
		  index = $(this).index();
		  $items.removeClass('active');
		  $(this).addClass('active');
	
		  var myUrl = $(this).find('.open-project').attr("href") + " .item-data"; 
	
		  
		   
		  
		  
		  $('#project-page-data').animate({opacity:0}, 400,function(){
				
				
				
				$("#project-page-data").load(myUrl,function(e){  
					var $helper = $('.helper');
					var height = $helper.height();
					
					
						$('#project-page-data').css("min-height", height);
							
						$('.project-slider').css({'height' : ''});	
						$('#maximage').css({'height' : ''});	
						
						
						
							$('#maximage').maximage({
								cycleOptions: {
									fx: 'fade',
									speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
									timeout: 6000,
									prev: '#arrow_left',
									next: '#arrow_right',
									pause: 1,
								},
							});
						

						
						
						
						
				});
				
				$('#project-page-data').delay(400).animate({opacity:1}, 400);
	
		  });
		  
		  
		  $('html, body').animate({ scrollTop: $(".portfolio-bottom").offset().top -40}, 900);
		  
		  
		  //Project Page Open
		  
		  
			
			  $('#project-page-holder').slideUp(600, function(){
					
				  $('#project-page-data').css('visibility', 'visible');}).delay(1100).slideDown(1000,function(){				  
				  
						$('#project-page-data').fadeIn('slow',function(){initBxModal();});
						$('.element_fade_in').each(function () {
							$(this).appear(function() {
							  $(this).delay(100).animate({opacity:1,right:"0px"},1000);
							});	
						});
					  
				  });
				
			  
		  }
	
		  return false;       
		  
		  });
	
		  //Project Page Close
		
		  $(document).on('click', '#project_close', function(event) {
		  
				
		  $('#project-page-data').animate({opacity:0}, 400,function(){		
				
				$('#project-page-holder').delay(400).slideUp(400);
				
		  });
				
				$('html, body').delay(1000).animate({ scrollTop: $(".portfolio-top").offset().top - 70}, 800);
				$items.removeClass('active') ;
		  
				return false;
				
		  });
	
	})();

    
});






// Switcher CSS 
  $(document).ready(function() {
"use strict";
    $("#hide, #show").click(function () {
        if ($("#show").is(":visible")) {
           
            $("#show").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            
            $("#switch").animate({
                "margin-left": "0px"
            }, 500).show();
        } else {
            $("#switch").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 500);
        }
    });
                      
});