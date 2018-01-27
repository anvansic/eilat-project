var map;

function loadMap() {
  map = new google.maps.Map(document.getElementById('map-screen'), {
    center: {lat: 29.5521815, lng: 34.9529193},
    zoom: 13
  });
}
