"use strict";
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

geocode("San Antonio, TX", mapboxToken).then(function(results){
    // console.log(results);
    map.setCenter(results);
});

var geoCoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false
}).on('result', function (data) {
    marker.setLngLat(data.result.center);
    getCity();
    console.log(data);
    getWeather(marker.getLngLat().lat, marker.getLngLat().lng);
});

map.addControl(geoCoder);

var markerOptions = {
    color: "#f003fc",
    draggable: true
};

function onDragEnd() {
    var lngLat = marker.getLngLat();
    // coordinates.style.display = 'block';
    // coordinates.innerHTML =
    //     'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    getWeather(lngLat.lat, lngLat.lng);
    getCity();
    // $('#current-city').html('<h2 id="city-on-load">' + getCity() + '</h2>');
}

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4916, 29.4252])
    .addTo(map).on('dragend', onDragEnd);

$.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ darkSkyKey +"/29.4252,-98.4916").done(function (data) {
    console.log(data);
    console.log(new Date(data.currently.time * 1000));

});

var scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
});
map.addControl(scale);

scale.setUnit('metric');

// function getCurrentCity(longi, lati) {
//     $.ajax('https://api.mapbox.com/geocoding/v5/mapbox.places/' + marker.getLngLat().lng + ',' + marker.getLngLat().lat + '.json?access_token=' + mapboxToken).done(function(data) {
//         console.log(data);
//
//     });
// }
//--------------------------------------------- location -------------------------------------------//


function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?language=en&" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            console.log(data.features);
            // return data.features[0].context[2].text + ', ' + data.features[0].context[3].text + ', ' + '<br>' + data.features[0].context[4].text;
            var place = '', region = '', country = '';
            $.each(data.features, function(i, obj) {
                if(obj.id.includes('place') || obj.id.includes('locality')) {
                    place = obj.text;
                } else if(obj.id.includes('region')) {
                    region = obj.text;
                } else if(obj.id.includes('country')) {
                    country = obj.text;
                }

            });
            return place + ', '+ region + ', ' + '<br>' + country;
        });
}

function getCity(){
    var lngLat = marker.getLngLat();
    reverseGeocode(lngLat, mapboxToken).then(function (result) {
        console.log(result);
        $('#current-city').html('<h2 id="city-on-load">' + result + '</h2>');
    });
}

// s

function onPageLoad () {
    getCity();
}

window.onload = onPageLoad();


// ----------------------------------- weather ----------------------------------------------//



function getWeather (lati, longi) {
    $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" +  lati + "," + longi).done(function (data) {
    // $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + "/29.4252,-98.4916").done(function (data) {
        console.log(data);
        console.log(new Date(data.currently.time * 1000));

        $('#weather-right-now').html("Temperature:  " + data.currently.temperature + '<br>' +
            "Current Weather:  " + data.currently.summary + '<br>' +
            "Humidity:  " + data.currently.humidity.toFixed(0) + '<br>' +
            "Pressure:  " + data.currently.pressure + '<br>' +
            "Current Time: " + new Date(data.currently.time * 1000));
// Display the current city by timezone label to the first h2 in body
        $('.city').html(" " + data.timezone);
//    Display forecast for today
        $('#insert-pic-current').attr('src', weatherIcon(data.daily.data[0].icon));
        $('.today').html(data.daily.data[0].summary +  '<br>' +
            "Temperature Low:  " + data.daily.data[0].temperatureLow.toFixed(0) + '&deg' + '<br>' +
            "Temperature High: " + data.daily.data[0].temperatureHigh.toFixed(0) + '&deg' + '<br>' +
            "Humidity:  " + (data.daily.data[0].humidity * 100).toFixed(0) + '%' + '<br>' +
            "Pressure:  " + (data.daily.data[0].pressure / 33.864).toFixed(2) + ' inHg' + '</p>');
// Display forecast for tomorrow
        $('#insert-pic-next').attr('src', weatherIcon(data.daily.data[1].icon));
        $('.tomorrow').html(data.daily.data[1].summary + '<br>' +
            "Temperature Low:  " + data.daily.data[1].temperatureLow.toFixed(0) +  '&deg' + '<br>' +
            "Temperature High: " + data.daily.data[1].temperatureHigh.toFixed(0) + '&deg' + '<br>' +
            "Humidity:  " + data.daily.data[1].humidity * 100 + '%' + '<br>' +
            "Pressure:  " + (data.daily.data[1].pressure / 33.864).toFixed(2) + ' inHg' + '</p>');
// Display forecast for day after tomorrow
        $('#insert-pic-next-after').attr('src', weatherIcon(data.daily.data[2].icon));
        $('.next-day').html(data.daily.data[2].summary + '<br>' +
            "Temperature Low:  " + data.daily.data[2].temperatureLow.toFixed(0) + '&deg' + '<br>' +
            "Temperature High: " + data.daily.data[2].temperatureHigh.toFixed(0) + '&deg' + '<br>' +
            "Humidity:  " + data.daily.data[2].humidity * 100 + '%' + '<br>' +
            "Pressure:  " + (data.daily.data[2].pressure  / 33.864).toFixed(2) + ' inHg' + '</p>');
    })
}

$('#get-weather-now').mouseenter(function () {
    $(this).css('background-color', '#2b235a').css('border', '2px solid #8fe0ff');
    $('#today-text').css('color', '#8fe0ff');
    $('.today').css('color', '#8fe0ff');
    $(this).mouseleave(function () {
        $(this).css('background-color', '#a7bcf2').css('border', 'none');
        $('#today-text').css('color', '#31255a');
        $('.today').css('color', '#31255a');
    })
});

$('#weather-tomorrow').mouseenter(function () {
    $(this).css('background-color', '#2b235a').css('border', '2px solid #8fe0ff');
    $('#tomorrow-text').css('color', '#8fe0ff');
    $('.tomorrow').css('color', '#8fe0ff');
    $(this).mouseleave(function () {
        $(this).css('background-color', '#a7bcf2').css('border', 'none');
        $('#tomorrow-text').css('color', '#31255a');
        $('.tomorrow').css('color', '#31255a');
    })
});


$('#next-day-weather').mouseenter(function () {
    $(this).css('background-color', '#2b235a').css('border', '2px solid #8fe0ff');
    $('#next-day-text').css('color', '#8fe0ff');
    $('.next-day').css('color', '#8fe0ff');
    $(this).mouseleave(function () {
        $(this).css('background-color', '#a7bcf2').css('border', 'none');
        $('#next-day-text').css('color', '#31255a');
        $('.next-day').css('color', '#31255a');
    })
});


getWeather(marker.getLngLat().lat, marker.getLngLat().lng);

function weatherIcon(condition) {
    var icon = '';
    weatherIcons.forEach(function (i) {
        if (i.condition === condition){
            icon = i.icon;
        }
    });
    return icon;
}




var d = new Date();

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
           dow = "Saturday";

           // for(var i = 0; days.daily.data.length < 3; i++){
           //     dow = days.push([i])
           // }
    }
        // return dow;
    // console.log(dow);
}

// console.log(getCurrentDay());

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
        condition: "partly-cloudy-day",
        icon: "icons/partly-cloudy.png"
    },
    {
        condition: "partly-cloudy-night",
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