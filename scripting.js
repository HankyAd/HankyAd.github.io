"use strict";

var defaultYoutubeLink = "y60wDzZt8yg";
var defaultTwitchStreamLink = "bobross";
var defaultWeatherLocation = "Portsmouth";

// youtube suggested links
// y60wDzZt8yg
// TUg__D0An6k

function changeYoutube(newYT){
  jsonObj.youtube = newYT;
  fs.writeFile('config.json', json, 'utf-8', callback);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

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

window.addEventListener("load", showTime);

function changeYoutube(){
  localStorage.youtubeLink = document.getElementById('youtubeInput').value;
  loadYoutube();
}

function loadYoutube(){
  if(localStorage.youtubeLink){
    document.getElementById('youtube').innerHTML = '<iframe src="https://www.youtube.com/embed/' + localStorage.youtubeLink + '" frameborder="0" allowfullscreen></iframe> ';
  } else {
    document.getElementById('youtube').innerHTML = '<iframe src="https://www.youtube.com/embed/' + defaultYoutubeLink + '" frameborder="0" allowfullscreen></iframe> ';
  }
}
window.addEventListener("load", loadYoutube);


function changeTwitch(){
  localStorage.twitchLink = document.getElementById('twitchInput').value;
  loadTwitch();
}


function loadTwitch(){
  if(localStorage.twitchLink){
    document.getElementById('twitch').innerHTML = '<iframe src="http://player.twitch.tv/?channel=' + localStorage.twitchLink + '&muted=true" frameborder="0" scrolling="false" allowfullscreen="true"></iframe>';
  }else{
    document.getElementById('twitch').innerHTML = '<iframe src="http://player.twitch.tv/?channel=' + defaultTwitchStreamLink + '&muted=true" frameborder="0" scrolling="false" allowfullscreen="true"></iframe>';
  }
}
window.addEventListener("load", loadTwitch);

//

//finding local weather

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
