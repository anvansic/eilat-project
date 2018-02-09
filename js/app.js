//This is the model storing the location names. It can only be
//manipulated with methods within the viewModel.
var locationModel = [
  //restaurants
  {location: 'Avgania Pizza', locHtml: ko.observable('Avgania Pizza'), type: 'restaurant', coords: {lat: 29.550757, lng: 34.952473}},
  {location: 'Pizza Del Piero', locHtml: ko.observable('Pizza Del Piero'), type: 'restaurant', coords: {lat: 29.5540357, lng: 34.9453651}},
  {location: 'Big Apple Pizza', locHtml: ko.observable('Big Apple Pizza'), type: 'restaurant', coords: {lat: 29.5546099, lng: 34.9529345}},
  {location: 'Almost Free Pizza', locHtml: ko.observable('Almost Free Pizza'), type: 'restaurant', coords: {lat: 29.554047, lng: 34.952999}},
  {location: 'Best Pizza', locHtml: ko.observable('Best Pizza'), type: 'restaurant', coords: {lat: 29.563296, lng: 34.959546}},
  //hospitals
  {location: 'Yoseftal Medical Center', locHtml: ko.observable('Yoseftal Medical Center'), type: 'hospital', coords: {lat: 29.5544428, lng: 34.9406651}},
  {location: 'Animal Hospital Zvirin', locHtml: ko.observable('Animal Hospital Zvirin'), type: 'hospital', coords: {lat: 29.5599992, lng: 34.9477458}},
  //parks
  {location: 'Um Rush Rush', locHtml: ko.observable('Um Rush Rush'), type: 'park', coords: {lat: 29.5491816, lng: 34.9533708}},
  {location: 'Canada Park', locHtml: ko.observable('Canada Park'), type: 'park', coords: {lat: 29.5564907, lng: 34.9336065}},
  {location: 'Gan Binyamin Central Park', locHtml: ko.observable('Gan Binyamin Central Park'), type: 'park', coords: {lat: 29.5529213, lng: 34.9523854}},
  {location: 'Ofira Park', locHtml: ko.observable('Ofira Park'), type: 'park', coords: {lat: 29.5520119, lng: 34.9571818}},
  {location: 'Eilat Ornithological Park', locHtml: ko.observable('Eilat Ornithological Park'), type: 'park', coords: {lat: 29.572468, lng: 34.9717355}},
  //museums
  {location: 'Eilat Museum', locHtml: ko.observable('Eilat Museum'), type: 'museum', coords: {lat: 29.5517409, lng: 34.95296}},
  //synagogues
  {location: 'Ohel Moshe Synagogue', locHtml: ko.observable('Ohel Moshe Synagogue'), type: 'synagogue', coords: {lat: 29.561641, lng: 34.948496}},
  {location: 'Beit Knesset Siach Yisrael', locHtml: ko.observable('Beit Knesset Siach Yisrael'), type: 'synagogue', coords: {lat: 29.558827, lng: 34.939348}},
  {location: 'Beit Knesset Rashbi', locHtml: ko.observable('Beit Knesset Rashbi'), type: 'synagogue', coords: {lat: 29.548158, lng: 34.936903}},
  {location: 'Rabbi Meier Baal Hanes Synagogue', locHtml: ko.observable('Rabbi Meier Baal Hanes Synagogue'), type: 'synagogue', coords: {lat: 29.5507135, lng: 34.9458469}},
  {location: 'Edmond Safra Synagogue', locHtml: ko.observable('Edmond Safra Synagogue'), type: 'synagogue', coords: {lat: 29.5437874, lng: 34.9345242}},
  //shopping
  {location: 'Rekhter Shopping Center', locHtml: ko.observable('Rekhter Shopping Center'), type: 'shopping', coords: {lat: 29.5550952, lng: 34.9523272}},
  {location: 'Mall Hayam Eilat', locHtml: ko.observable('Mall Hayam Eilat'), type: 'shopping', coords: {lat: 29.5497876, lng: 34.9539158}},
  {location: 'Ofer Queen of Sheba Mall', locHtml: ko.observable('Ofer Queen of Sheba Mall'), type: 'shopping', coords: {lat: 29.550351, lng: 34.9609273}},
  {location: 'Ice Mall', locHtml: ko.observable('Ice Mall'), type: 'shopping', coords: {lat: 29.554109, lng: 34.965603}},
  //hotels
  {location: 'Queen of Sheba Eilat', locHtml: ko.observable('Queen of Sheba Eilat'), type: 'hotel', coords: {lat: 29.5503482, lng: 34.9615659}},
  {location: 'Royal Beach', locHtml: ko.observable('Royal Beach'), type: 'hotel', coords: {lat: 29.549386, lng: 34.9631416}},
  {location: 'U Suites', locHtml: ko.observable('U Suites'), type: 'hotel', coords: {lat: 29.5472149, lng: 34.9522117}},
  {location: 'Astral Nirvana Hotel Suites', locHtml: ko.observable('Astral Nirvana Hotel Suites'), type: 'hotel', coords: {lat: 29.5564124, lng: 34.95463}},
  {location: 'Herods Vitalis', locHtml: ko.observable('Herods Vitalis'), type: 'hotel', coords: {lat: 29.5482394, lng: 34.9662831}}
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

  //This function takes the data passed in from the selected item
  //and both highlights the list item itself (via CSS) and the
  //associated marker.
  self.chooseLocation = function() {
    for(var i=0; i<self.locations().length; i++) {
      if(self.locations()[i].location == this.location) {
        self.locations()[i].locHtml('<b>'+this.location+'</b>');

        //TODO: Get the corresponding marker to 'light up'.
        //For this, I'll need to refer to the Google Maps course
        //project stored on Magda...

      } else {
        self.locations()[i].locHtml(self.locations()[i].location);
      }
    }
  }
}

ko.applyBindings(new viewModel());
