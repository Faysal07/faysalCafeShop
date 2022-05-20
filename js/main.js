$(document).ready(function(){

    $(window).bind('scroll', function() {

        var navHeight = $("150").height();

        ($(window).scrollTop() > navHeight) ? $('.header-grp').addClass('goToTop') : $('.header-grp').removeClass('goToTop');

    });

});




