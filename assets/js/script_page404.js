$(function () {

  var filterList = {

    init: function () {

      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixitup({
        targetSelector: '.portfolio',
        filterSelector: '.filter',
        effects: ['fade'],
        easing: 'snap',
        // call the hover effect
        onMixEnd: filterList.hoverEffect()
      });

    },

    hoverEffect: function () {

      // Simple parallax effect
      //$('#portfoliolist .portfolio').hover(
      //function () {
      //$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
      //$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');       
      // },
      // function () {
      // $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
      // $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');               
      //}   
      //);        

    }

  };

  // Run the show!
  filterList.init();
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });


  $('a[href^="#"]').click(function (event) {
    var id = $(this).attr("href");
    var offset = 0;
    var target = $(id).offset().top;

    $('html, body').animate({ scrollTop: target }, 500);
    event.preventDefault();
  });
});