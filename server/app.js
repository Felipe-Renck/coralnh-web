const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to Vertical service APIs.')
})

app.listen(3000, function () {
  console.log('Vertical Web app service listening on port 3000!')
})