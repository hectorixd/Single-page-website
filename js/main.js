function initMap() {
  const loc = { lat: 20.656236, lng: -103.325815 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}
