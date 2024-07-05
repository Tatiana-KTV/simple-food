$(function(){
  $('.slider').slick({
    dots: true,
    focusOnSelect: true,
    arrows: true,
    // appendArrows: '.slider-navigation',
    // prevArrow: '<div class="slider-arrow"></div>',
    appendDots: '.slider-navigation__dots',
    // nextArrow: '<div class="slider-arrow"></div>',


  prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
  nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
  appendArrows: '.arrows-wrap'

  });

    $('.menu__link, .logo').on('click', function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
    });
});


const changeColor = document.querySelector('.menu');
changeColor.addEventListener('mousedown', (e) => {
  const activeClass = e.target;
  if (activeClass.tagName != 'A') return;
  changeColor.querySelector('.active')?.classList.remove('active');
  activeClass.classList.add('active');
});





$(document).scroll(function (e) {
  $(window).scrollTop() > 60 
? $('.header__top').addClass('header-fixed')
    : $('.header__top').removeClass('header-fixed');
});

var mixer = mixitup('.popular__content');