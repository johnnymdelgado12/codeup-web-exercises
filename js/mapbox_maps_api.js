mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

geocode("119314 N, US-281 #104A, San Antonio, TX 78258", mapboxToken).then(function(results){
    console.log(results);
    map.setCenter(results);
});

// var markerOptions = {
//     zoom: 20,
//     color: "#f003fc",
// };
//
// // var marker = new mapboxgl.Marker(markerOptions)
// //     .setLngLat([-98.4616,29.6218])
// //     .addTo(map);
//
// var popupOptions = {
//     maxWidth: '200px',
//     closeOnClick: true,
// };
//
// var popup = new mapboxgl.Popup(popupOptions)
//     .setLngLat([-98.4616,29.6218])
//     .setHTML("<h1>Ginza Ramen And Poke</h1>")
//     // .addTo(map);
//
// var info = document.createElement('div');
// info.id = 'marker';
//
// var marker = new mapboxgl.Marker(info)
//     .setLngLat([-98.4616,29.6218])
//     // .addTo(map)
//     .setPopup(popup);
//     popup.addTo(map);

// create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Ginza Ramen And Poke'
);

// create DOM element for the marker
var info = document.createElement('div');
info.id = 'marker';

// create the marker
var marker = new mapboxgl.Marker(info)
    .setLngLat([-98.4616, 29.6218])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);