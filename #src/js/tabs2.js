$('.btn').on('click', function () {
  var local_data = $(this).attr('data-tab');
  if (!$('[data-item=' + local_data + ']').hasClass('active')) {
		$('[data-item=' + local_data + ']').siblings().removeClass('active');
		$('[data-item=' + local_data + ']').addClass('active');
	}
})