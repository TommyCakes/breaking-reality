// $(document).ready(function() {
//   $('#menu').click(function() {
//     $('.side-nav').animate({
//       right: "+=40%"
//     }, 1000)
//   });
//   $('#close-menu').click(function() {
//     $('.side-nav').animate({
//       right: "-=40%"
//     }, 500)
//   });
// });

(function($) {
  $(document).ready(function() {
    var mySlidebars = new $.slidebars();
    $('#menu').on('click', function() {
      mySlidebars.slidebars.toggle('right');
    });
    $('.my-third-button').click(mySlidebars.slidebars.close);
  });
}) (jQuery);
