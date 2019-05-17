function initMap() {
  // The location of Uluru
  var uluru = {lat: 39.6295, lng: -79.9559};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
