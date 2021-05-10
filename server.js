const http = require('http');
const fs = require('fs');
const url = require('url');

const indexPage = fs.readFileSync('index.html');
const indexCss = fs.readFileSync('index.css');
const calculateJs = fs.readFileSync('calculate.js');
const server = http.createServer(RouteSetting);
const port = 3000;
server.listen(port);
 
function RouteSetting(req, res) {
  const url_parts = new URL(req.url, 'relative:///');
  switch (url_parts.pathname) {
    case '/':
    case '/index.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(indexPage);
      res.end();
      break;

    case '/index.css':
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(indexCss);
      res.end();
      break;

    case '/calculate.js':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(calculateJs);
      res.end();
      break;

    default:
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('お探しのページは見つかりません。');
      break;
  }
}