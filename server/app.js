var bodyParser = require('body-parser');
const express = require('express');
const app = express();
const email = require('./email/email.js');
const calendarAPI = require('./calendar/calendarAPI.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next) {
  res.send('Welcome to Vertical service APIs.')
});

app.post('/email', function (req, res, next) {
  var json = req.body;
  var Email = new email.Email(json.email, json.subject, json.message, 'Coral Jovem Novo Hamburgo');
  console.log(Email.send());
  res.send(this.error);
});

var enableCrossDomain = function (req, res) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
}

app.use(enableCrossDomain);

app.listen(3002, function () {
  console.log('Vertical Web app service listening on port 3002!');
  calendarAPI.getCalendarEvents();
});

