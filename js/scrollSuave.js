//Scrip qui permet de naviger toutes les sections du site web avec un effet de soft scroll

$(document).ready(function () {

  var btnUp = $('#btnUp');

  $(window).on('scroll', function () {
    var projetsOffsetTop = $('#projets').offset().top;

    //Affiche / cache le button "d'aller vers le haut" de la page web
    if ($(window).scrollTop() >= projetsOffsetTop) {
      btnUp.css('margin-right', 0);

    }else if ($(window).scrollTop() <= projetsOffsetTop/2) {
      btnUp.css('margin-right', '-60px');
    }
  })

/************************************************************************************************ */
  $('a.fleche-up').on('click', function (e) {
    e.preventDefault();
    if ($(window).scrollTop() != 0) {
      $('html, body').stop().animate({scrollTop: 0}, 1000);
    }
  })

  $('a.soft-scroll').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

/************************************************************************************************ */
  $('a.apropos-scroll').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 122
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-equipo').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 68
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

});
