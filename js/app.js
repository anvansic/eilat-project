//This is the model storing the location names. It can only be
//manipulated with methods within the viewModel.
var locationModel = [
  {location: 'Melony Club Hotel'},
  {location: 'list_item_2'},
  {location: 'list_item_3'},
  {location: 'list_item_4'},
  {location: 'list_item_5'}
];

//In this section, the global map variable is declared, and the
//loadMap() function is run.
var map;

function loadMap() {
  map = new google.maps.Map(document.getElementById('map-screen'), {
    center: {lat: 29.557669, lng: 34.951925},
    zoom: 16
  });
}

//In this section, the viewModel implemented with Knockout defines
//methods facilitating data access and manipulation between the view
//HTML and the locationModel.
function viewModel() {
  var self = this;

  self.locations = ko.observableArray(locationModel);
}

ko.applyBindings(new viewModel());
