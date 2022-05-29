
$(document).ready(function () {

  // $('.nav__btn').click(function (e) {
  //   e.preventDefault();
  //   $('.nav__btn').toggleClass('nav__btn--activ')
  //   $('.navbar').toggleClass('navbar--activ')
  //   $('body').toggleClass('no-scroll')
  // });

  // $('.navbar__link').click(function (e) {
  //   e.preventDefault();

  //   $('.nav__btn').removeClass('nav__btn--activ')
  //   $('.navbar').removeClass('navbar--activ')
  //   $('body').removeClass('no-scroll')
  // });

  // if ($(window).width() > 992) {
  //   new WOW().init();
  // }

  // $('.li-nk').click(function (e) { // отслеживаем клик по кнопке с классом li-nk
  //   e.preventDefault();
  //   var scroll_el = $(this).attr('href'); // берем у него содержимое атрибута href, которое начинается на "#section" или ".section"
  //   $('html, body').animate({
  //     scrollTop: $(scroll_el).offset().top - 130 // отступ (пиксели)
  //   }, 1000); // скорость (миллисекунды)
  //   return false; // отключаем действие по умолчанию
  // });

  // $('.slider').slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   adaptiveHeight: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         arrows: false,
  //         dots: false,
  //       }
  //     },

  //   ]
  // });



  // ========== Filter ==========
  // var mixer = mixitup('.selection__inner', {
  //   load: {
  //     filter: '.selection-2000',
  //   },
  // });

  //========== Slick slider ==========
  // $('.comment-slider').slick({
  //   dots: true,
  //   fade: true,
  // });

  // ========== Acordeon ==========
  // $('.response__accordeon .response__accordeon-title').on('click', function (e) {
  //   e.preventDefault();
  //   $('.response__accordeon .response__accordeon-text').removeClass('response__accordeon-text--active');
  //   $(this).next().addClass('response__accordeon-text--active');
  // });


  //========== Modal window ==========
  // $('.open-modal').on('click', function (e) {
  //   e.preventDefault();
  //   $('.modal').addClass('modal--active');
  //   $('body').addClass('no-scroll');
  // });

  // $('.modal__close-btn').on('click', function (e) {
  //   e.preventDefault();
  //   $('.modal').removeClass('modal--active');
  //   $('body').removeClass('no-scroll');
  // });

  // $('.modal__form-btn').on('click', function (e) {
  //   e.preventDefault();
  //   $('.modal').removeClass('modal--active');
  //   $('.modal-thanks').addClass('modal-thanks--active');
  //   $('body').addClass('no-scroll');
  // });

  // $('.form__input-btn').on('click', function (e) {
  //   e.preventDefault();
  //   $('.modal-thanks').addClass('modal-thanks--active');
  //   $('body').addClass('no-scroll');
  // });

  // $('.modal-thanks__btn').on('click', function (e) {
  //   e.preventDefault();
  //   $('.modal-thanks').removeClass('modal-thanks--active');
  //   $('body').removeClass('no-scroll');
  // });
});
