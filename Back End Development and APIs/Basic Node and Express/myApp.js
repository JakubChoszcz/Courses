const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
  const { method, path, ip } = req;
  console.log(`${method} ${path} - ${ip}`);

  next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  process.env.MESSAGE_STYLE === 'uppercase'
    ? res.json({'message': 'Hello world'.toUpperCase()})
    : res.json({'message': 'Hello json'});
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();

  next();
}, (req,res) => {
  res.send({time: req.time});
});

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;

  res.send({echo: word});
});

app.get('/name', (req, res) => {
  const { first, last } = req.query;

  res.send({name: `${first} ${last}`});
});

app.post('/name', (req, res) => {
  const { first, last } = req.body;

  res.send({name: `${first} ${last}`})
});






























 module.exports = app;
