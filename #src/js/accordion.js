$(document).ready(function () {
  $('.metrics-header').on('click', function (){
    var acctiveTab =  $(this);
    if (!$(this).hasClass('active')) {
      $(this).parent().siblings().children().removeClass('active');
      $(this).addClass('active');
      $(this).siblings().addClass('active');
    };
  })
});

