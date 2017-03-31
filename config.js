//all three functions perform similar actions
//all change the localStorage value for their respective links
//also alerts the user that it has been changed

function changeTwitch(){
  localStorage.twitchLink = document.getElementById('twitchInput').value;
  alert("Twitch Stream changed to: " + localStorage.twitchLink);
}

function changeYoutube(){
  localStorage.youtubeLink = document.getElementById('youtubeInput').value;
  alert("Youtube Stream / Link changed to: " + localStorage.youtubeLink);
}

function changeWeather(){
  localStorage.weatherLocation = document.getElementById('weatherInput').value;
  alert("Weather Location changed to: " + localStorage.weatherLocation);
}
