const contactsMap = document.querySelector("#js-contactsMap");

if (contactsMap) {
  const mapStyles = []; //здесь должен быть задан JSON со стилями

  const mapCenter = new google.maps.LatLng(56.49387, 84.96274);

  const mapOptions = {
    center: mapCenter,
    disableDefaultUI: true,
    draggable: true,
    gestureHandling: "cooperative",
    scrollwheel: false,
    styles: mapStyles,
    zoom: 15,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
  };

  const map = new google.maps.Map(contactsMap, mapOptions);
}
