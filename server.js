const http = require('http');
const fs = require('fs');
const url = require('url');
const indexPage = fs.readFileSync('index.html');
const indexPage = fs.readFileSync('index.css');
const server = http.createServer(RouteSetting);
const port = 3000;
server.listen(port);
 
function RouteSetting(req, res) {
  const url_parts = new URL(req.url);
  switch (url_parts.pathname) {
    case '/':
    case 'index.html':
      res.end(indexPage);
      break;

    case 'index.css':
      break;
  }
}