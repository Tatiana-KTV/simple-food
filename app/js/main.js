$(function(){
  $('.slider').slick({
    dots: true,
    arrows: false
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