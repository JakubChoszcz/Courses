const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 5000;

// const logger = require('./logger');
// const authorize = require('./authorize');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    return res.status(200).send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    return res.status(200).send('<h1>About Page</h1>')
})

app.get('/products', (req, res) => {
    console.log(req.user);
    return res.status(200).send('<h1>Products</h1>')
})

app.get('/items', (req, res) => {
    console.log(req.user);
    return res.status(200).send('<h1>Items</h1>')
})

app.get('*', (req, res) => {
    return res.status(404).send('page not found')
})

app.listen(port, () => {
    console.log('Server is listening on port 5000...');
})