ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("find-us__map-ya", {
        center: [56.305879, 44.087491],
        zoom: 13,
        controls: ['zoomControl']
    });

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark([56.295582, 44.104470], {
      hintContent: 'Офис продаж',
  }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'https://sergeev.press/pin-map.png',
      iconImageSize: [55, 79],
  });

  myMap.geoObjects
  .add(myPlacemark);

  myMap.behaviors.disable('scrollZoom');
}