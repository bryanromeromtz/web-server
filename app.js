const express = require('express');
const app = express();
const port = 8080

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('hola-mundo', (req, res) => {
  res.send('Route');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/hola-mundo/404.html');
})

app.listen(port, (req, res) => {
  console.log(`Listening on port: ${port}`)
})