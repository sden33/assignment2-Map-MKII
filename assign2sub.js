var map;
var labels = 'ABCDE';
var labelIndex = 0;

function latlon(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=52+Beddoeavenue,+Clayton,+Melbourne&key=AIzaSyCS2k0XyJvOl7gI0ayNNEHBPgkN9GBatN0", false);
xhr.send("");

var data = JSON.parse(xhr.responseText);
var lat = data.results[0].geometry.location.lat;
var lng = data.results[0].geometry.location.lng;
var location = {};
location.lat = lat;
location.lng = lng;

    initialize(location);
    
}

    function initialize(location) {
        var locations = location;
        
        var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: location
  });
        
         addMarker(locations, map);
}
    
    function addMarker(location, map) {
        
        var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
            map: map
  });
}
        
