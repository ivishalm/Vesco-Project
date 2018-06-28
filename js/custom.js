// magnific popup

$(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


//////////Team Section//////////////

$(function() {

    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 300,
        loop: true,
        autoplayHoverPause: true
    });

}); 

//////////////////// Testimonials //////////////////////

$(function() {

    $('#cutomers-testimonials').owlCarousel({
        items: 1,
        autoplay: true,
        smartspeed: 300,
        loop: true,
        
        autoplayHoverPause: true
    });

}); 

//////////////////// Counter Up //////////////////////

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

////////////////////  clients  //////////////////////

$(function() {

    $('.clients-wrapper').owlCarousel({
        items: 6,
        autoplay: true,
        smartspeed: 300,
        loop: true,
        autoplayHoverPause: true
    });

}); 

////////////////////  Navigation  //////////////////////

// show / hide transperent black navigation

$(function () {  
    $(window).scroll(function() {
        if($(this).scrollTop() < 50 ) {
            // hide
            $('nav').removeClass('vesco-top-nav');
        } else {
            // show nav
            $('nav').addClass('vesco-top-nav');
        }
    });
});




