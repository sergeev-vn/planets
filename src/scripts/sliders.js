$(function() {

  //home main slider
  $('.home-slider').slick({
    arrows: true,
    prevArrow: $('.button-slder_prev'),
    nextArrow: $('.button-slder_next'),
    fade: true
  });


  //sdasboard slider
  $('.dashboard').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        
        settings: {
          arrows: true,
          prevArrow: "<div class='dashboard__btn'><button class='arrow-button arrow-button_prev'></button></div>",
          nextArrow: "<div class='dashboard__btn'><button class='arrow-button arrow-button_next'></button></div>",
          slidesToShow: 3,
          infinite: true
        }
      }
    ]
  });
});
