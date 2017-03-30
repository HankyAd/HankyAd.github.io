
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
  var youtubeLink = "y60wDzZt8yg";
  document.getElementById('youtube').innerHTML = '<iframe src="https://www.youtube.com/embed/' + youtubeLink + '" frameborder="0" allowfullscreen></iframe> ';
}
window.addEventListener("load", changeYoutube);


function changeTwitch(){
  var twitchStreamLink = document.getElementById("streamName").value;
  document.getElementById('twitch').innerHTML = '<iframe src="http://player.twitch.tv/?channel=' + twitchStreamLink + '&muted=true" frameborder="0" scrolling="false" allowfullscreen="true"></iframe>';
}

var twitchButton = document.getElementById("twitchButton")

if(twitchButton){
  twitchButton.addEventListener("click", changeTwitch);
}


//<a class="twitter-timeline" href="https://twitter.com/TwitterDev">Tweets by TwitterDev</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

function loadTwitch(){
  var twitchStreamLink = "strippin"
  document.getElementById('twitch').innerHTML = '<iframe src="http://player.twitch.tv/?channel=' + twitchStreamLink + '&muted=true" frameborder="0" scrolling="false" allowfullscreen="true"></iframe>';
}
window.addEventListener("load", loadTwitch);

//

//finding local weather

$(document).ready(function() {
  $.simpleWeather({
    woeid: '', //2357536
    location: 'Portsmouth',
    unit: 'c',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
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
});
