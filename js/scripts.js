$(function () {
  $('.button-call, .contacts__button-call').click(function(){
    $(".popup").fadeIn();
  });
  $('.item__button-close').click(function(){
    $(".popup").fadeOut();
  });
  document.querySelector('body').addEventListener('click', function (ev) {
    if (ev.target.tagName === 'A') {
      if (window.innerWidth <= 1024 && ev.target.classList.contains("menu__link")) {
        $('body').toggleClass('disable-scroll');
        $('.header__menu').slideToggle();
        $('.header__toggle').toggleClass('header__toggle-close');
      }
    }else if(ev.target.tagName === 'BUTTON') {
      if(ev.target.classList.contains('content__button')){
        window.location.hash = "#Услуги";
      }else if(ev.target.classList.contains('what-price')){
        window.location.hash = "#Стоимость";
      }
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
