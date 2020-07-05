$('.popup-open').click(function () {
  var local_id = $(this).attr('data-tab');
  $('#' + local_id).fadeIn();
  return false;
});

$('.popup-close').click(function () {
  $(this).parents('.popup-fade').fadeOut();
  return false;
});

