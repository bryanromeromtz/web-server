const express = require('express');
const app = express();
const port = 8080

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/hola-mundo/404.html');
})

app.listen(port, (req, res) => {
  console.log(`Listening on port: ${port}`)
})