$(document).ready(function () {
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    margin: 10,
    navSpeed: 1000,
    autoplayTimeout: 10000,
    smartSpeed: 500,
    nav: false,
    dots: true,
    dotsContainer: ".owl-dots",
    autoplay: true,
    rewind: true,
    items: 1
  });

});