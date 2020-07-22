$(function() {
  var location = window.location.href;
  var cur_url = '/' + location.split('/').pop();

  $('.main-menu__elem').each(function () {
    var link = $(this).attr('href');
    if (cur_url.indexOf(link) > -1) {
			$(this).addClass('active');
		}
  });
});