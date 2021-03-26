
$(document).ready(function () {

  var fixedHeader = $('#fixedHeader');
  $(window).on('scroll', function () {
    var projetsOffsetTop = $('#projets').offset().top;

    if ($(window).scrollTop() >= projetsOffsetTop) {
      fixedHeader.css('margin-top', 0);

    }else if ($(window).scrollTop() <= projetsOffsetTop/2) {
      fixedHeader.css('margin-top', '-68px');
    }
  })
});
