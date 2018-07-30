$(function () {
  $(window).scroll(function () {
    if (($(this).scrollTop() >= 68)) {
      $(".header").addClass('on')
    } else {
      $(".header").removeClass('on')
    }
  })

})