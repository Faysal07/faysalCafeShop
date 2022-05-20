(function ($) {
	"use strict";

    jQuery(document).ready(function($){



        


    });


    jQuery(window).load(function(){

        
    });


    // Can also be used with $(document).ready()
$(window).load(function() {

        $('#carousel').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				itemWidth: 113,
				itemMargin: 5,
				asNavFor: '#slider'
			  });
		
			  $('#slider').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				sync: "#carousel",
				start: function(slider){
				  $('body').removeClass('loading');
				}
			  });
    
});
    
    
}(jQuery));	