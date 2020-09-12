$(function () {
  $('.button-call, .contacts__button-call').click(function () {
    $(".popup__container").css("display", "flex")
      .hide()
      .fadeIn();
  });
  $('#phone-input').mask('+7 (999) 999-99-99');
  $('.item__button-close').click(function () {
    $(".popup__container").fadeOut();
  });
  document.querySelector('.item__form').addEventListener('submit', function (e) {
    e.preventDefault();
    var form = $('.item__form');
    // вы же понимаете, о чём я тут толкую?
    // это ведь одна из ипостасей AJAX-запроса
    $.post(
      form.attr("action"),
      form.serialize(),
      function () {
        $(".popup__container").fadeOut();
        $('.popup__container-send-succeed').slideDown();
        $('.popup__container-send-succeed').click(function () {
          let g = $(this);
          g.slideUp();
        });
        setTimeout(function () {
          $('.popup__container-send-succeed').slideUp();
        }, 2500);
      }
    )
  });
  document.querySelector('body').addEventListener('click', function (ev) {
    if (ev.target.tagName === 'A') {
      if (window.innerWidth <= 1024 && ev.target.classList.contains("menu__link")) {
        $('body').toggleClass('disable-scroll');
        $('.header__menu').slideToggle();
        $('.header__toggle').toggleClass('header__toggle-close');
      }
    } else if (ev.target.tagName === 'BUTTON') {
      if (ev.target.classList.contains('content__button')) {
        window.location.hash = "#Услуги";
      } else if (ev.target.classList.contains('what-price')) {
        window.location.hash = "#Стоимость";
      }
    } else if (!ev.target.classList.contains("popup__item") && !hasSomeParentTheClass(ev.target, "popup__item")) {
      $(".popup__container").fadeOut();
    }
  });
  $('.header__toggle').click(function () {
    if (window.innerWidth <= 1024) {
      console.log(window.innerWidth);
      $('.header__toggle').toggleClass('header__toggle-close');
      $('body').toggleClass('disable-scroll');
      $('.header__menu').slideToggle();
    }
  });
  $('.start-screen--elements').addClass('elements--active');
  $('.prices-and-time--elements').addClass('elements--active');
  let mySwiper = new Swiper('.slider__wrapper', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    loop: true,
    wrapperClass: 'slider__list',
    slideClass: 'slider__item',
    pagination: {
      el: '.slider__pagination',
      type: 'bullets',
      bulletClass: 'paginator__item',
      bulletActiveClass: 'paginator__item--active',
      clickable: true
    },
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },
  });
});

function hasSomeParentTheClass(element, classname) {
  while (true) {
    if (element.classList.contains(classname)) {
      return true;
    } else if (element.tagName === 'BODY') {
      return false;
    } else {
      element = element.parentElement;
    }
  }
  return false;
}
