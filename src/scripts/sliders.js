$(function() {

  //home main slider
  $('.home-slider').slick({
    arrows: true,
    fade: true,
    prevArrow: "<div class='home-slider__btn'><button class='arrow-button arrow-button_prev'></button></div>",
    nextArrow: "<div class='home-slider__btn home-slider__btn_next'><button class='arrow-button arrow-button_next'></button></div>",
  });


  //dasboard slider
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
      },
      {
        breakpoint: 980,
        settings: {
          arrows: true,
          prevArrow: "<div class='dashboard__btn'><button class='arrow-button arrow-button_prev'></button></div>",
          nextArrow: "<div class='dashboard__btn'><button class='arrow-button arrow-button_next'></button></div>",
          slidesToShow: 2,
          infinite: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows: true,
          prevArrow: "<div class='dashboard__btn'><button class='arrow-button arrow-button_prev'></button></div>",
          nextArrow: "<div class='dashboard__btn'><button class='arrow-button arrow-button_next'></button></div>",
          slidesToShow: 1,
          infinite: true
        }
      }
    ]
  });
});
