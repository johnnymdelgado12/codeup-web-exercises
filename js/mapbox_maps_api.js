mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

geocode("San Antonio, TX", mapboxToken).then(function(results){
    console.log(results);
    map.setCenter(results);
});

var popupOptions = {
    maxWidth: '200px',
    closeOnClick: true,
};

var popup = new mapboxgl.Popup(popupOptions)
    .setLngLat([-98.4616,29.6218])
    .setHTML("<h1>Ginza Ramen And Poke</h1>")
    .addTo(map);

var markerOptions = {
    zoom: 20,
    color: "#f003fc",
};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4616,29.6218])
    .setPopup(popup)
    .togglePopup()
    .addTo(map);

var popup2 = new mapboxgl.Popup(popupOptions)
    .setLngLat([-98.5001,29.4934])
    .setHTML("<h1>Ranger Creek Brewery & Distilling</h1>")
    .addTo(map);

var markerOptions2 = {
    zoom: 20,
    color: "#5ae6ce"
}

var marker2 = new mapboxgl.Marker(markerOptions2)
    .setLngLat([-98.3970,29.5293])
    .setPopup(popup2)
    .togglePopup()
    .addTo(map);



var popup3 = new mapboxgl.Popup(popupOptions)
    .setLngLat([-98.3970,29.5293])
    .setHTML("<h1>Dog Fathers</h1>")
    .addTo(map);

var markerOptions3 = {
    zoom: 20,
    color: "#f2ff3b"
}

var marker3 = new mapboxgl.Marker(markerOptions3)
    .setLngLat([-98.5001,29.4934])
    .setPopup(popup3)
    .togglePopup()
    .addTo(map);


var restaurants = [
    {
        name: "Ginza Ramen & Poke",
        address: "19314 N, US-281 #104A, San Antonio, TX 78258",
        marker: "#f003fc"
    },
    {
        name: "Ranger Creek Brewery & Distilling",
        address: "4834 Whirlwind Dr, San Antonio, TX 78217",
        marker: "#5ae6ce"
    },
    {
        name: "Dog Fathers",
        address: "6211 San Pedro Ave, San Antonio, TX 78216",
        marker: "#f2ff3b"
    }
];



