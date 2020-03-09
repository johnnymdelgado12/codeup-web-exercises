"use strict";


$.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ darkSkyKey +"/29.4252,-98.4916").done(function (data) {
    console.log(data);
    console.log(new Date(data.currently.time * 1000));

});

function getWeather () {
    $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + "/29.4252,-98.4916").done(function (data) {
        console.log(data);
        console.log(new Date(data.currently.time * 1000));
        $('#weather-right-now').append("Temperature:  " + data.currently.temperature + '<br>' +
            "Current Weather:  " + data.currently.summary + '<br>' +
            "Humidity:  " + data.currently.humidity + '<br>' +
            "Pressure:  " + data.currently.pressure + '<br>' +
            "Current Time: " + new Date(data.currently.time * 1000));
// Display the current city by timezone label to the first h2 in body
        $('.city').append(" " + data.timezone);
//    Display forecast for today
        $('#insert-pic-current').attr('src', weatherIcon(data.daily.data[0].icon));
        $('.today').html(data.daily.data[0].summary + getCurrentDay(data.daily.data[0]) +  '<br>' +
            "Temperature Low:  " + data.daily.data[0].temperatureLow.toFixed(0) + '&deg' + '<br>' +
            "Temperature High: " + data.daily.data[0].temperatureHigh.toFixed(0) + '&deg' + '<br>' +
            "Humidity:  " + data.daily.data[0].humidity * 100 + '%' + '<br>' +
            "Pressure:  " + (data.daily.data[0].pressure / 33.864).toFixed(2) + ' inHg' + '</p>');
// Display forecast for tomorrow
        $('#insert-pic-next').attr('src', weatherIcon(data.daily.data[1].icon));
        $('.tomorrow').append(data.daily.data[1].summary + '<br>' +
            "Temperature Low:  " + data.daily.data[1].temperatureLow.toFixed(0) +  '&deg' + '<br>' +
            "Temperature High: " + data.daily.data[1].temperatureHigh.toFixed(0) + '&deg' + '<br>' +
            "Humidity:  " + data.daily.data[1].humidity * 100 + '%' + '<br>' +
            "Pressure:  " + (data.daily.data[1].pressure / 33.864).toFixed(2) + ' inHg' + '</p>');
// Display forecast for day after tomorrow
        $('#insert-pic-next-after').attr('src', weatherIcon(data.daily.data[2].icon));
        $('.next-day').append(data.daily.data[2].summary + '<br>' +
            "Temperature Low:  " + data.daily.data[2].temperatureLow.toFixed(0) + '&deg' + '<br>' +
            "Temperature High: " + data.daily.data[2].temperatureHigh.toFixed(0) + '&deg' + '<br>' +
            "Humidity:  " + data.daily.data[2].humidity * 100 + '%' + '<br>' +
            "Pressure:  " + (data.daily.data[2].pressure  / 33.864).toFixed(2) + ' inHg' + '</p>');
    })
}
getWeather();

function weatherIcon(condition) {
    var icon = '';
    weatherIcons.forEach(function (i) {
        if (i.condition === condition){
            icon = i.icon;
        }
    });
    return icon
}
var d = new Date()

function getCurrentDay(days) {
    var dow = '';
    switch (days) {
        case 0:
          dow =  "Sunday";
            break;
        case 1:
           dow = "Monday";
            break;
        case 2:
           dow = "Tuesday";
            break;
        case 3:
           dow =  "Wednesday";
            break;
        case 4:
           dow = "Thursday";
            break;
        case 5:
           dow = "Friday";
            break;
        case 6:
           dow = "Saturday"
    }
    return dow;
}

console.log(getCurrentDay());

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();

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
    marker.setLngLat(data.result.center);
    console.log(data);
});

map.addControl(geoCoder);

var markerOptions = {
    color: "#f003fc",
    draggable: true
};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4916, 29.4252])
    .addTo(map).on('dragend', getCurrentLocation);


function getCurrentLocation() {
    $.ajax('https://api.mapbox.com/geocoding/v5/mapbox.places/' + marker.getLngLat().lng + ',' + marker.getLngLat().lat + '.json?access_token=' + mapboxToken).done(function(data) {
        console.log(data);
    });
}



var  weatherIcons = [
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

var dayOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];