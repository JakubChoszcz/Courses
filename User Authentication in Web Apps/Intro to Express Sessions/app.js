const express = require('express');
const app = express();
require('dotenv').config();

const { PORT } = process.env;

const middleware1 = (req, res, next) => {
    console.log('I am the first middleware');

    const errObj = new Error('I am an error');

    req.customProperty = 100;

    // next(errObj);
    next();
}

const middleware2 = (req, res, next) => {
    // console.log('I am the second middleware');
    req.customProperty = 600;

    next();
}

// const middleware3 = (req, res, next) => {
//     console.log('I am the third middleware');

//     next();
// }

const errorHandler = (err, req, res, next) => {
    res.json({ err })
}

app.use(middleware1);
app.use(middleware2);

app.get('/', (req, res, next) => {
    console.log(`The custom property value is : ${req.customProperty}`);

    res.send('<h1>Hello World</h1>')
})

app.use(errorHandler);

app.listen(PORT, (req, res) => {
    console.log(`Server is lisening on port : ${PORT}`);
})