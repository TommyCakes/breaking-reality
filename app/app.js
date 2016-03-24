$(document).ready(function() {
  var photos = ['http://edge.alluremedia.com.au/m/g/2015/08/blade_runner_4.jpg', 'http://www.cinemablend.com/images/news_img/99337/blade_runner_99337.jpg', 'http://www.diyphotography.net/wordpress/wp-content/uploads/2014/04/bladeRunner_011a.jpg']
  var count = 0;
  $('#next').click(function() {
      count++;
      $('#carosel').attr("src", photos[count])
  });

  $('#back').click(function() {
    count--;
    $('#carosel').attr("src", photos[count])
  });
  // setInterval(function() {
  //   count++;
  //   $('#carosel')("src", photos[count]);
  // }, 2000)
  //
})


$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);

});
