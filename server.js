'use static';
var fs = require('fs');
var express = require('express');



var config = require('./config.json');


var app = express();

app.use('/', function(req, res, next) { console.log(new Date(), req.method, req.url); next(); });

app.use('/', express.static('./', { extensions: ['html'] }));

//returns a 404 page
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

//runs the website on port 8080
app.listen(8080);
