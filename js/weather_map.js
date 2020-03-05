"use strict";


$.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ darkSkyKey +"/29.4252,-98.4916").done(function (data) {
    console.log(data);
    console.log(new Date(data.currently.time * 1000));

});

function getWeather () {
    $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4252,-98.4916").done(function (data) {
        console.log(data);
        console.log(new Date(data.currently.time * 1000));

        $.each(data.daily.data, function (i, day) {

        })
    });
}
getWeather();

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

var geoCoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false
}).on('result', function (data) {
    marker.setLngLat(data.result.center)
});

map.addControl(geoCoder);

var markerOptions = {
    color: "#f003fc",
    draggable: true
};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4916, 29.4252])
    .addTo(map).on('dragend', getCurrentLocation());


function getCurrentLocation() {
    geoCoder.on('result', function (data) {
        console.log(data);
    });
}

var  weather = [
    {
        condition: "clear-day",
        icon: "icons/clear-day.png"
    },
    {
        condition: "clear-night",
        icon: "icons/clear-night.png"
    },
    {
        condition: "rain",
        icon: "icons/rain.png"
    },
    {
        condition: "snow",
        icon: "icons/snow.png"
    },
    {
        condition: "sleet",
        icon: "icons/sleet.png"
    },
    {
        condition: "wind",
        icon: "icons/windy.png"
    },
    {
        condition: "fog",
        icon: "icons/fog.png"
    },
    {
        condition: "cloudy",
        icon: "icons/cloudy.png"
    },
    {
        condition: "partly cloudy",
        icon: "icons/partly-cloudy.png"
    },
    {
        condition: "partly cloudy night",
        icon: "icons/partly-cloudy-night"
    }
];

