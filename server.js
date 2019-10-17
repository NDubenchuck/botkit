const http = require('http');
const fs = require('fs');

const index = fs.readFileSync ('index.html', 'utf8');
const port = _process.env.PORT || 443;

const requestHandler = (req, res) => {
  if(req.url === '/favicon.ico') {
    return res.end('');
  }
  console.log(req.url, req.method);
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end(index);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error("eroorr", err)
  }
  console.log(`Server listdening on port ${port}`);
});