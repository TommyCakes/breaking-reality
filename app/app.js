$(document).ready(function() {
  $('#menu').click(function() {
    $('.side-nav').animate({
      right: "+=40%"
    }, 1000)
  });
  $('#close-menu').click(function() {
    $('.side-nav').animate({
      right: "-=40%"
    }, 500)
  });
});
