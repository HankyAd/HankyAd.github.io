"use strict";
//this will open sky news
var defaultYoutubeLink = "y60wDzZt8yg";
//will open bob ross
var defaultTwitchStreamLink = "bobross";
//portsmouth is set as the default location for weather
var defaultWeatherLocation = "Portsmouth";

// youtube suggested links
// y60wDzZt8yg
// TUg__D0An6k


//twitch suggested usernames
//bobross
//itmejp


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//this function is used to get the current date/time in format hh/mm/ss and dd/mm/yyyy
//uses Date()
function showTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  document.getElementById('date').innerHTML = day + "/" + month + "/" + year;
  var t = setTimeout(showTime, 500);
}

//displays time on page load
window.addEventListener("load", showTime);

//if there is a localstorage value, load that localstorage value
//else run default link
function loadYoutube(){
  if(localStorage.youtubeLink){
    document.getElementById('youtube').innerHTML = '<iframe src="https://www.youtube.com/embed/' + localStorage.youtubeLink + '"autoplay=1 cc_load_policy=1 frameborder="0" allowfullscreen></iframe> ';
  } else {
    document.getElementById('youtube').innerHTML = '<iframe src="https://www.youtube.com/embed/' + defaultYoutubeLink + '"autoplay=1 cc_load_policy=1 frameborder="0" allowfullscreen></iframe> ';
  }
}
//insert embed on load
window.addEventListener("load", loadYoutube);

//if there is a localstorage value, load that localstorage value
//else run default link
function loadTwitch(){
  if(localStorage.twitchLink){
    document.getElementById('twitch').innerHTML = '<iframe src="http://player.twitch.tv/?channel=' + localStorage.twitchLink + '&muted=true" frameborder="0" scrolling="false" allowfullscreen="true"></iframe>';
  }else{
    document.getElementById('twitch').innerHTML = '<iframe src="http://player.twitch.tv/?channel=' + defaultTwitchStreamLink + '&muted=true" frameborder="0" scrolling="false" allowfullscreen="true"></iframe>';
  }
}
//insert embed on page load
window.addEventListener("load", loadTwitch);

//If there is a localstorage value, insert weather for that location
//else load portsmouth
$(document).ready(function() {
  if(localStorage.weatherLocation){
    $.simpleWeather({
      location: localStorage.weatherLocation,
      unit: 'c',
      success: function(weather) {
        var html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
        html += '<li class="currently">'+weather.currently+'</li>';
        html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
        html += '<p>'+weather.title+'</p>'
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  }else{
    $.simpleWeather({
      location: defaultWeatherLocation,
      unit: 'c',
      success: function(weather) {
        var html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
        html += '<li class="currently">'+weather.currently+'</li>';
        html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
        html += '<p>'+weather.title+'</p>'
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  }
});
