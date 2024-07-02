$(function(){

});

$(document).scroll(function (e) {
  $(window).scrollTop() > 60
    ? $('.header-top').addClass('header-fixed')
    : $('.header-top').removeClass('header-fixed');
});

var mixer = mixitup('.popular__content');