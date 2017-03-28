
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



function changeTwitter(){
  var newTwitter = "SkyNews";
  document.getElementById('tweeter').innerHTML = "https://twitter.com/" + newTwitter;
}
changeTwitter();


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
