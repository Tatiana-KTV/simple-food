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







  
  $('.select-style').styler(),

  

    // $(".form-price__input").ionRangeSlider({
    //   type: "double",
    //   from: "100",
    //   to: "800",
    //   onStart: function (data) {
    //     $('.form-price__data-from').text(data.from),
    //       $('.form-price__data-to').text(data.to)
    //   },
    //   onChange: function (data) {
    //     $('.form-price__data-from').text(data.from),
    //       $('.form-price__data-to').text(data.to)
    //   }
    // });

  // $('.slider').slick({
  //   dots: true,
  //   focusOnSelect: true,
  //   arrows: true,
  //   infinite: false,
  //   appendDots: '.slider-navigation__dots',
  //   appendDots: '.slider-navigation',
  //   appendArrows: '.slider-navigation',
  //   nextArrow: '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--prev"><svg class="slider-arrow__arrow-left" fill="#000"><use xlink:href="images/sprite.svg#slick-prev-arrow"></use></svg></button>',
  //   prevArrow: '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--next"><svg class="slider-arrow__arrow-right" fill="#000"><use xlink:href="images/sprite.svg#slick-prev-arrow"></use></svg></button>',
  // });

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















// document.addEventListener('DOMContentLoaded', () => {

//   const burger = document.querySelector('.burger');
//   const mobileMenu = document.querySelector('.burger-menu');
//   const bodyLock = document.querySelector('body');
//   const burgerNew = document.querySelector('.burger-new');

//   burger.addEventListener('click', () => {
//     mobileMenu.classList.add('burger-menu--active');
//     if (mobileMenu.classList.contains('burger-menu--active')) {
//       burgerNew.classList.add('burger--active');
//       bodyLock.classList.add('lock');
//     } else {
//       burgerNew.classList.remove('burger--active');
//       bodyLock.classList.remove('lock');
//     }
//   });
//   burgerNew.addEventListener('click', () => {
//     mobileMenu.classList.remove('burger-menu--active');
//     burgerNew.classList.remove('burger--active');
//     bodyLock.classList.remove('lock');
//   })

// });

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger', ); //наша кнопка
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

  //Mobile Menu
  const burger = document.querySelector('.top-filter__btn', ); //наша кнопка
  const mobileMenu = document.querySelector('.filter-menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА
  // const burgerClose = document.querySelector(".filter-menu__close-btn");
  burger.addEventListener("click", () => {
    mobileMenu.classList.add("filter-menu--active");
    if (mobileMenu.classList.contains("filter-menu--active")) {
      bodyLock.classList.add("lock");
    }
  });

  burgerClose.addEventListener("click", () => {
    mobileMenu.classList.remove("filter-menu--active");
    bodyLock.classList.remove("lock");
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove("filter-menu--active");
      bodyLock.classList.remove("lock");
    }
  });

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
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

var mixer = mixitup('.popular-category__content');