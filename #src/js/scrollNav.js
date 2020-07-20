jQuery(function ($) {
  var section = $('.content-block--metrics'),
    nav = $('.customer-nav'),
    navHeight = nav.outerHeight(); // получаем высоту навигации 

  // поворот экрана 
  window.addEventListener('orientationchange', function () {
    navHeight = nav.outerHeight();
  }, false);

  $('.wrapper__content').on('scroll', function () {
    var position = $(this).scrollTop();

    section.each(function () {
      var top = $(this).offset().top - navHeight - 5,
        bottom = top + $(this).outerHeight();

      if (position >= top && position <= bottom) {
        nav.find('a').removeClass('active');
        section.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    var id = $(this).attr('href');

    $('.wrapper__content').animate({
      scrollTop: $(id).offset().top - navHeight
    }, 500);

    return false;
  });

});