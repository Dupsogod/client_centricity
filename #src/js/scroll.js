var offsetY = 300;
$(window).scroll(function () {
  if ($(this).scrollTop() > offsetY) {
    $('.main-menu').addClass('scroll');
  } else {
    $('.main-menu').removeClass('scroll');
  }
});
