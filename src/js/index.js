$(function () {
 const $header=$('.header')

  $(window).scroll(function () {
    if($(this).scrollTop()>71){
      $header.addClass('on')
    }else{
      $header.removeClass('on')
    }
  })



})