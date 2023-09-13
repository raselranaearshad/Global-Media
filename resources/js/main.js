$(document).ready(function(){
    // Mobile Menu
    $('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: 767
    });
    // Advertiser Slider
    $('.advertiser-active').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // Magnific Popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });
});