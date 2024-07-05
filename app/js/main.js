$(function(){
  $('.slider').slick({
    dots: true,
    focusOnSelect: true,
    arrows: true,
    appendArrows: '.slider-navigation',
    prevArrow: '<div class="slider-arrow"><</div>',
    appendDots: '.slider-navigation__dots',
    nextArrow: '<div class="slider-arrow">></div>',
  });
});


const changeColor = document.querySelector('.menu__list');
changeColor.addEventListener('mousedown', (e) => {
  const activeClass = e.target;
  if (activeClass.tagName != 'A') return;
  changeColor.querySelector('.active')?.classList.remove('active');
  activeClass.classList.add('active');
});





$(document).scroll(function (e) {
  $(window).scrollTop() > 60
    ? $('.header-top').addClass('header-fixed')
    : $('.header-top').removeClass('header-fixed');
});

var mixer = mixitup('.popular__content');