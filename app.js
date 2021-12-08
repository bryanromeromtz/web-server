const express = require('express');
const app = express();
const port = 8080

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/path', (req, res) => {
  res.send('Route');
});

app.get('*', (req, res) => {
  res.send('404 | Page not found');
})

app.listen(port, (req, res) => {
  console.log(`Listening on port: ${port}`)
})