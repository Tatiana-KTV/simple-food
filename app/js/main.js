$(function () {

  var $range = $(".price-slider__input"),
    $inputFrom = $(".price-slider__input-from"),
    $inputTo = $(".price-slider__input-to"),
    instance,
    min = 0,
    max = 1200,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
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


    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });


  $('.select-style').styler(),
$('.product-section__input').styler(),


    $('.slider').slick({
      dots: true,
      focusOnSelect: true,
      arrows: true,
      infinite: false,
      appendDots: '.slider-navigation__dots',
      appendArrows: '.slider-navigation',
      nextArrow: '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--prev"><svg class="slider-arrow__arrow-left" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
      prevArrow: '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--next"><svg class="slider-arrow__arrow-right" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
    });

  $('.menu__link, .logo').on('click', function (event) {
    // event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  let parent = document.querySelector('.pagination');
  let menuItem = parent.querySelectorAll('.pagination__link');

  parent.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('pagination__link')) {
      for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('active');
      }
      target.classList.add('active');
      target.classList.add('pagination__disabled');
    }
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
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.burger-menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА
  const burgerClose = document.querySelector(".burger-new");
  burger.addEventListener("click", () => {
    mobileMenu.classList.add("burger-menu--active");
    if (mobileMenu.classList.contains("burger-menu--active")) {
      bodyLock.classList.add("lock");
    }
  });

  burgerClose.addEventListener("click", () => {
    mobileMenu.classList.remove("burger-menu--active");
    bodyLock.classList.remove("lock");
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove("burger-menu--active");
      bodyLock.classList.remove("lock");
    }
  });

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const mobileBurger = document.querySelector('.top-filter__btn');
  const sideMenu = document.querySelector('.filter-menu');
  const bodyLock = document.querySelector('body');
  const sideMenuClose = document.querySelector(".filter-menu__close-btn");

  mobileBurger.addEventListener("click", () => {
    sideMenu.classList.add("filter-menu--active");
    bodyLock.classList.add("new-lock");
  });

  sideMenuClose.addEventListener("click", () => {
    sideMenu.classList.remove("filter-menu--active");
    bodyLock.classList.remove("new-lock");
  });

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

$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.promo__list:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
    });
  } else {
    $('.promo__list.slick-initialized').slick('unslick');
  }
});

$(function () {
  $('.product-section__star').rateYo({
    rating: 3.6,
    starWidth: '16px',
    spacing: '6px',
    readOnly: true,
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',

  });
});

$(function () {

  //
  $('.review-content__client-star').rateYo({
    rating: 4,
    starWidth: '16px',
    spacing: '6px',
    readOnly: true,
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',

  });
});

$(function () {

  $('.form-star').rateYo({
    rating: 4,
    starWidth: '16px',
    spacing: '6px',
    readOnly: false,
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',

  });
});

$('.product-section__img').slick({
  // dots: true,
  // focusOnSelect: true,
  arrows: true,
  infinite: false,
  // appendDots: '.product-section__img-dots',
  appendArrows: '.product-section__slider-navigation',
  nextArrow: '<button type="button" class="product-section__arrow product-section__arrow--next"><svg class="product-section__arrow-left" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
  prevArrow: '<button type="button" class="product-section__arrow product-section__arrow--prev"><svg class="product-section__arrow-right" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
});

$('.product-section__tabs-item').on('click', function (e) {
  e.preventDefault();
  // $('.product-section__tabs-item').removeClass('active');
  // $(this).addClass('active');

  $('.product-section__tab-content').removeClass('product-section__tab-content--active');
  $($(this).attr('href')).addClass('product-section__tab-content--active');
});

$('.product-section__tabs-item').on('click', function (e) {
  e.preventDefault();
  $('.product-section__tabs-item').removeClass('active');
  $(this).addClass('active');
});

$('.recent__slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 5,
  infinite: false,
   responsive: [{
       breakpoint: 992,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 3,
         dots: true,
         arrows: false,
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 2,
         dots: true,
         arrows: false,
       }
     },
     {
       breakpoint: 560,
       settings: {
         slidesToShow: 2,
         dots: true,
         arrows: false,
       }
     },
     
   ],
//768px
//560px
  appendDots: '.recent__slider-dots',
  appendArrows: '.recent__slider-arrow',
  prevArrow: '<button type="button" class="recent__slider-arrows recent__slider-arrows--prev"><svg class="slider-arrow__arrow-right" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="recent__slider-arrows recent__slider-arrows--next"><svg class="slider-arrow__arrow-left" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
    });
var mixer = mixitup('.popular-category__content');