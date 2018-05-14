function initMap() {
  var uluru = {lat: 40.730610, lng: -73.935242};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru,
    disableDefaultUI: true,
    gestureHandling: 'none'
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

