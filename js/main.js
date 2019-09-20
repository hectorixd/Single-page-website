function initMap() {
  const loc = { lat: 20.656236, lng: -103.325815 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (this.window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800);
  }
});
