$(function(){
  $('.slider').slick({
    dots: true,
    focusOnSelect: true,
    arrows: true,
    appendDots: '.slider-navigation__dots',
    appendArrows: '.slider-navigation',
    prevArrow:
      '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--prev"><svg class="slider-arrow__arrow-left" fill="#000"><use xlink:href="images/sprite.svg#slick-prev-arrow"></use></svg></button>',
    nextArrow:
      '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--next"><svg class="slider-arrow__arrow-right" fill="#000"><use xlink:href="images/sprite.svg#slick-prev-arrow"></use></svg></button>',
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