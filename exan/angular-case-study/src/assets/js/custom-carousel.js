$(document).ready(function() {
  $('.room_carousel .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    items: 1,
  })
});

$(document).ready(function() {
  $('.gallery .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    items: 4,
  })
});
