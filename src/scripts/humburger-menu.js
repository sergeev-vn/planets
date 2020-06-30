$(function() {
  $('.humburger-button').on('click', () => {
    
    $('.humburger-button').hasClass('active')
      ? (
        $('.header__nav').hide(),
        $('.humburger-button').removeClass('active'),
        $('.fast-nav').removeClass('active'),
        $('body').css('overflow', '')
      )
      : (
        $('.header__nav').show(300),
        $('.humburger-button').addClass('active'),
        $('.fast-nav').addClass('active'),
        $('body').css('overflow', 'hidden')
      )
  });
});