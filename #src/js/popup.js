$('.popup-open').click(function () {
  var local_id = $(this).attr('data-tab');
  $("body").css("overflow","hidden");
  $('#' + local_id).fadeIn();
  return false;
});

$('.popup-close').click(function () {
  $(this).parents('.popup-fade').fadeOut();
  $("body").css("overflow","auto");
  return false;
});

