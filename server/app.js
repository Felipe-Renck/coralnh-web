const express = require('express');
const app = express();
const email = require('./email/email.js');
const calendarAPI = require('./calendar/calendarAPI.js');

app.get('/', function (req, res) {
  res.send('Welcome to Vertical service APIs.')
});

app.get('/email', function (req, res) {
  var Email = new email.Email(
    'roger.zabka@gmail.com',
    'Quero as músicas',
    'Eu não sei o que escrever',
    'Coral Jovem Novo Hamburgo'
  );

  Email.send();

  res.send("Email enviado");
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

