// loader
$(window).on('load', function() {
	$('.loader').fadeOut(2000);
	time: 2000
});

$('.menu, .overlay').click(function () {
    $('.menu').toggleClass('clicked');
    
    $('#nav').toggleClass('show');
    
});

$(document).ready(function(){
	 // counter
     $('.counter').counterUp({
      delay: 10,
      time: 2000
  });

});

// slider
$(document).on('ready', function() {
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    });


// wow
new WOW().init();
