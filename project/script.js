"use strict";


console.log('script.js loaded');

var btn = document.querySelector('#btn');
btn.addEventListener('click', btnOnClickListener);
var weatherBox =  document.querySelector('#weather');

function btnOnClickListener(evt) {
    console.log('clicked');
    var nameInputText = document.querySelector('#name');
    var city = nameInputText.value;
    getWeather(city);
}


/*

comment

script tag at the end ?


 */


function getWeather(city) {

    if (city.trim().length==0) {
        alert('Enter city name please');
    }
    var http = new XMLHttpRequest();
    var api = 'APPID=ec5dd278ac83ac8cd86ac7c8e1fcb5b6';
    var url = 'http://api.openweathermap.org/data/2.5/find?units=metric&q=' + city + '&' + api;
    http.open('GET', url);
    http.onreadystatechange = function (ev) {


        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var weather = (JSON.parse(http.responseText).list[0]);
            console.log(weather);
            weatherBox.value = weather.main.temp  +' celius '+  weather.name + ' ' + weather.sys.country;
        } else if (http.readyState == XMLHttpRequest.DONE && http.status !== 200) {
            console.log('Error');
            weatherBox.value  = '';
        }
    };

    http.send();


}