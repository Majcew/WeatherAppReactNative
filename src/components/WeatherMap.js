const api_key = 'c4ffc65c1eda93d335ccc1b45fbab2cc';
const url_prefix = 'https://tile.openweathermap.org/map/';
const url_sufix = '/{z}/{x}/{y}.png?appid=';
const layers = [
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  url_prefix + 'temp_new' + url_sufix + api_key,
  url_prefix + 'pressure_new' + url_sufix + api_key,
  url_prefix + 'clouds_new' + url_sufix + api_key,
  url_prefix + 'precipitation_new' + url_sufix + api_key,
  url_prefix + 'wind_new' + url_sufix + api_key,
];

const html_map = (lat, lon, zoom, layer) => `
<!DOCTYPE html>
<html>
<head>
	
	<title>Quick Start - Leaflet</title>
	<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	
	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
	
</head>
<body>
<div id="mapid" style="width: 100wh; height: 100vh;"></div>
<script>
	var mymap = L.map('mapid').setView([${lat}, ${lon}], ${zoom});
	L.tileLayer('${layers[layer]}', {
        maxZoom: ${zoom},
        minZoom: ${zoom},
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
	}).addTo(mymap);
	L.marker([${lat}, ${lon}]).addTo(mymap)
		.bindPopup("<b>I'm here</b><br />lat:${lat}<br />lon:${lon}").openPopup();
	
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on('click', onMapClick);
</script>
</body>
</html>
`;

export default html_map;
