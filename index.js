console.log("iamhere")
console.log("monkey")
const potato = 123;
const tomato = 44;
console.log(potato, tomato)
const pomato = potato + tomato;
console.log(pomato)
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading file');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    } else if (req.url === '/styles.css') {
        fs.readFile(path.join(__dirname, 'styles.css'), 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading file');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });
    }   else  if (req.url === '/potato.png') {
        fs.readFile(path.join(__dirname, 'potato.png'), (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end('Error reading file');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'image/png');
          res.end(data);
        });
    }   else  if (req.url === '/lesing.html') {
        fs.readFile(path.join(__dirname, 'lesing.html'), 'utf-8', (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end('Error reading file');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        });
    }   else  if (req.url === '/begreper.html') {
        fs.readFile(path.join(__dirname, 'begreper.html'), 'utf-8', (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end('Error reading file');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        });
    }   else  if (req.url === '/potetspill.html') {
        fs.readFile(path.join(__dirname, 'potetspill.html'), 'utf-8', (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end('Error reading file');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        });
    }   else  if (req.url === '/potetspill.js') {
        fs.readFile(path.join(__dirname, 'potetspill.js'), 'utf-8', (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end('Error reading file');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/javascript');
          res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
