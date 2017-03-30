'use static';
var fs = require('fs');
var express = require('express');



var config = require('./config.json');


var app = express();

app.use('/', function(req, res, next) { console.log(new Date(), req.method, req.url); next(); });

app.use('/', express.static('./', { extensions: ['html'] }));



// This assumes you've already installed 'jsonfile' via npm
var jsonfile = require('jsonfile');

// routes will go here
app.get('/', function(req, res) {

  var youtube = req.param('yt');
  var twitch = req.param('tw');
  var weather = req.param('we');
  var timeFormat = req.param('tf')  

  res.send(youtube + ' ' + twitch + ' ' + weather+ ' ' + timeFormat);
});




app.listen(8080);