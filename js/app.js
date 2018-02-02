//This is the model storing the location names. It can only be
//manipulated with methods within the viewModel.
var locationModel = [
  //restaurants
  {location: 'Avgania Pizza', type: 'restaurant', coords: {lat: 29.550757, lng: 34.952473}},
  {location: 'Pizza Del Piero', type: 'restaurant', coords: {lat: 29.5540357, lng: 34.9453651}},
  {location: 'Big Apple Pizza', type: 'restaurant', coords: {lat: 29.5546099, lng: 34.9529345}},
  {location: 'Almost Free Pizza', type: 'restaurant', coords: {lat: 29.554047, lng: 34.952999}},
  {location: 'Best Pizza', type: 'restaurant', coords: {lat: 29.563296, lng: 34.959546}},
  //hospitals
  {location: 'Yoseftal Medical Center', type: 'hospital', coords: {lat: 29.5544428, lng: 34.9406651}},
  {location: 'Animal Hospital Zvirin', type: 'hospital', coords: {lat: 29.5599992, lng: 34.9477458}},
  //parks
  {location: 'Um Rush Rush', type: 'park', coords: {lat: 29.5491816, lng: 34.9533708}},
  {location: 'Canada Park', coords: {lat: 29.5564907, lng: 34.9336065}},
  {location: 'Gan Binyamin Central Park', coords: {lat: 29.5529213, lng: 34.9523854}},
  {location: 'Ofira Park', coords: {lat: 29.5520119, lng: 34.9571818}},
  {location: 'Eilat Ornithological Park', coords: {lat: 29.572468, lng: 34.9717355}},
  //museums
  {location: 'Eilat Museum', type: 'museum', coords: {lat: 29.5517409, lng: 34.95296}},
  //synagogues
  {location: 'Ohel Moshe Synagogue', type: 'synagogue', coords: {lat: 29.561641, lng: 34.948496}},
  {location: 'Beit Knesset Siach Yisrael', type: 'synagogue', coords: {lat: 29.558827, lng: 34.939348}},
  {location: 'Beit Knesset Rashbi', type: 'synagogue', coords: {lat: 29.548158, lng: 34.936903}},
  {location: 'Rabbi Meier Baal Hanes Synagogue', type: 'synagogue', coords: {lat: 29.5507135, lng: 34.9458469}},
  {location: 'Edmond Safra Synagogue', type: 'synagogue', coords: {lat: 29.5437874, lng: 34.9345242}},
  //shopping
  {location: 'Rekhter Shopping Center', type: 'shopping', coords: {lat: 29.5550952, lng: 34.9523272}},
  {location: 'Mall Hayam Eilat', type: 'shopping', coords: {lat: 29.5497876, lng: 34.9539158}},
  {location: 'Ofer Queen of Sheba Mall', type: 'shopping', coords: {lat: 29.550351, lng: 34.9609273}},
  {location: 'Ice Mall', type: 'shopping', coords: {lat: 29.554109, lng: 34.965603}},
  //hotels
  {location: 'Queen of Sheba Eilat', type: 'hotel', coords: {lat: 29.5503482, lng: 34.9615659}},
  {location: 'Royal Beach', type: 'hotel', coords: {lat: 29.549386, lng: 34.9631416}},
  {location: 'U Suites', type: 'hotel', coords: {lat: 29.5472149, lng: 34.9522117}},
  {location: 'Astral Nirvana Hotel Suites', type: 'hotel', coords: {lat: 29.5564124, lng: 34.95463}},
  {location: 'Herods Vitalis', type: 'hotel', coords: {lat: 29.5482394, lng: 34.9662831}}
];

//In this section, the global map variable is declared, and the
//loadMap() function is run.
var map;
var markers = [];

function loadMap() {
  map = new google.maps.Map(document.getElementById('map-screen'), {
    center: {lat: 29.557669, lng: 34.951925},
    zoom: 16
  });

  //Marker image creation code courtesy of the Google Maps API course.
  var regularIcon = markerImage('4286f4');
  var clickedIcon = markerImage('ffffff');

  for(var i=0; i<locationModel.length; i++) {
    var title = locationModel[i].location;
    var marker = new google.maps.Marker({
      position: locationModel[i].coords,
      title: title,
      icon: regularIcon,
      animation: google.maps.Animation.DROP,
      id: i
    });
    markers.push(marker);
  }

  for(var i=0; i<markers.length; i++) {
    markers[i].setMap(map);
  }

  //This function generates the marker images; since markers are handled entirely
  //"behind-the-scenes", the function does not need to be handled by the viewModel,
  //so it is defined here. Code courtesy of the Google Maps API course.
  function markerImage(color) {
    var markerImage = new google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+color+'|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21, 34));
      return markerImage;
  }
}

//In this section, the viewModel implemented with Knockout defines
//methods facilitating data access and manipulation between the view
//HTML and the locationModel.
function viewModel() {
  var self = this;

  self.locations = ko.observableArray(locationModel);
}

ko.applyBindings(new viewModel());
