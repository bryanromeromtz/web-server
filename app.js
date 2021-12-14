require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT || 3000;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => {
  console.log(err);
})

//Servir contenido statico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Bryan Mazeo',
    title: 'Node Course'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Bryan Mazeo',
    title: 'Node Course Generic'
  })
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Bryan Mazeo',
    title: 'Node Course Elements'
  })
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/hola-mundo/404.html');
})

app.listen(port, (req, res) => {
  console.log(`Listening on port: ${port}`)
})