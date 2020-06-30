$( function() {
  $( "#room-tabs" ).tabs({
    activate: function( event, ui ) {
      $('.room-slider').slick('setPosition');
    }
  });

  $( "#payment-tabs" ).tabs();
});