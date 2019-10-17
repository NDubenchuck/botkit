// const express = require('express');
//
// const app =express();
//
// app.set('index.html');
//
// app.get('/', (req, res) => {
//   res.render('index')
// });
//
// const PORT = process.env.PORT || 3000;
//
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// });

const http = require('http');
const fs = require('fs');

const index = fs.readFileSync ('./index.html', 'utf8');
const port = 6300;

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

// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000
//
// express()
// .use(express.static(path.join(__dirname, 'public')))
// .set('views', path.join(__dirname, 'views'))
// .set('view engine', 'ejs')
// .get('/', (req, res) => res.render('pages/index'))
// .listen(PORT, () => console.log(`Listening on ${ PORT }`))
