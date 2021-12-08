const http = require('http');

http.createServer((req, res) => {

  //res.writeHead(200, { 'Content-Type': 'application/json' });
  //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

  res.write('Hello World');
  res.end();
})
  .listen(3000)
console.log('listening in port 3000')