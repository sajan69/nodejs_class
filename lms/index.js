const express = require('express');
const httpStatus = require('http-status');
const app = express();

const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
// const http = require('http');

// const server = http.createServer((res, req) => {
//   req.writeHead(200, {'Content-Type': 'text/html'});
//   req.write('<h1>Hello World</h1>');
//   req.end();
// });

// server.listen(5000, () => {
//   console.log('Server is running on port 5000');
// })