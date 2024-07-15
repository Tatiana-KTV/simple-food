$(function () {

  var $range = $(".form-price__input"),
    $inputFrom = $(".form-price__data-from"),
    $inputTo = $(".form-price__data-to"),
    instance
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

  $('.form-price__input').ionRangeSlider({
    type: "double",
  });

  $range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    // from: 200,
    // to: 800,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  $('.slider').slick({
    dots: true,
    focusOnSelect: true,
    arrows: true,
    infinite: false,
    appendDots: '.slider-navigation__dots',
    // appendDots: '.slider-navigation',
    appendArrows: '.slider-navigation',
    nextArrow: '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--prev"><svg class="slider-arrow__arrow-left" fill="#000"><use xlink:href="images/sprite.svg#slick-prev-arrow"></use></svg></button>',
    prevArrow: '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--next"><svg class="slider-arrow__arrow-right" fill="#000"><use xlink:href="images/sprite.svg#slick-prev-arrow"></use></svg></button>',
  });

  $('.menu__link, .logo').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

const changeColor = document.querySelector('.menu');
changeColor.addEventListener('mousedown', (e) => {
  const activeClass = e.target;
  if (activeClass.tagName != 'A') return;
  changeColor.querySelector('.active') ?.classList.remove('active');
  activeClass.classList.add('active');
});

$(document).scroll(function (e) {
  $(window).scrollTop() > 60 ?
    $('.header__top').addClass('header-fixed') :
    $('.header__top').removeClass('header-fixed');
});

document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.burger-menu');
  const bodyLock = document.querySelector('body');
  const burgerNew = document.querySelector('.burger-new');

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('burger-menu--active');
    if (mobileMenu.classList.contains('burger-menu--active')) {
      burgerNew.classList.add('burger--active');
      bodyLock.classList.add('lock');
    } else {
      burgerNew.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
    }
  });
  burgerNew.addEventListener('click', () => {
    mobileMenu.classList.remove('burger-menu--active');
    burgerNew.classList.remove('burger--active');
    bodyLock.classList.remove('lock');
  })

});

$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.restorant__list:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
    });
  } else {
    $('.restorant__list.slick-initialized').slick('unslick');
  }
});

var mixer = mixitup('.popular-category__content');