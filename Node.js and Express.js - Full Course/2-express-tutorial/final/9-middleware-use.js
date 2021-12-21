const express = require('express');
const app = express();
const port = 5000;

const logger = require('./logger');
const authorize = require('./authorize');

app.use(logger);

app.get('/', (req, res) => {
    return res.status(200).send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    return res.status(200).send('<h1>About Page</h1>')
})

app.get('/products', authorize, (req, res) => {
    console.log(req.user);
    return res.status(200).send('<h1>Products</h1>')
})

app.get('/items', authorize, (req, res) => {
    console.log(req.user);
    return res.status(200).send('<h1>Items</h1>')
})

app.get('*', (req, res) => {
    return res.status(404).send('page not found')
})

app.listen(port, () => {
    console.log('Server is listening on port 5000...');
})