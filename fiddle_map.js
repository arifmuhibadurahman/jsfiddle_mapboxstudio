// define access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpZjE3MDQiLCJhIjoiY2x4M3piMmZqMTJwYTJrb3J4MHlybzhpOSJ9.fzx_tgN-JlCqIzng8sv1qw';

// create map
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/arif1704/clxg9hh8b007m01pc1lggdiiy' // map style URL from Mapbox Studio
});

// wait for map to load before adjusting it
	map.on('load', () => {
  // make a pointer cursor
  map.getCanvas().style.cursor = 'default';

  // set map bounds to the continental west java
  map.fitBounds([
    [107.078339, -7.384258],
    [107.993832, -6.597397]
  ]);

  // create legend items
  const legendItems = [
    { name: 'Pendidikan', icon: 'symbol', color: '#cce746' },
    { name: 'Kecamatan', icon: 'fill', color: '#db1f1f' },
    { name: 'Garis batas', icon: 'line', color: '#000000' },
    { name: 'Pipa_minyak', icon: 'line', color: '#d21ef6' }
  ];

  // create legend
  const legend = document.getElementById('legend');

  legendItems.forEach(item => {
    const legendItem = document.createElement('div');
    legendItem.innerHTML = `<span class="legend-key" style="background-color: ${item.color};"></span>${item.name}`;
    legend.appendChild(legendItem);
  });

  // change info window on hover
  map.on('mousemove', (event) => {
    const states = map.queryRenderedFeatures(event.point, {
      layers: ['statedata']
    });
    document.getElementById('pd').innerHTML = states.length
      ? `<h3>${states[0].properties.name}</h3><p><strong><em>${states[0].properties.density}</strong> people per square mile</em></p>`
      : `<p>Hover over a state!</p>`;
  });
});
