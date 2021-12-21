const express = require('express');
const app = express();
const port = 5000;

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();

    console.log(`method - ${method}, url - ${url}, time - ${time}`);

    next();
}

app.get('/', logger, (req, res) => {
    return res.status(200).send('<h1>Home Page</h1>')
})

app.get('/about', logger, (req, res) => {
    return res.status(200).send('<h1>About Page</h1>')
})

app.get('*', logger, (req, res) => {
    return res.status(404).send('page not found')
})

app.listen(port, () => {
    console.log('Server is listening on port 5000...');
})