$(function () {
  $('.alert-message__btn').on('click', function(){
    $('.alert-message').removeClass('active')
  });

  $('.header__nav-burger').on('click', function(){
    $('.header__nav-burger').toggleClass('active');
    $('.header__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__nav-link').on('click', function() {
    $(this).next('.header__nav-sublist').slideToggle();
    $(this).toggleClass('header__nav-link--active');
  });

});