const express = require('express');
const app = express();

const { products, people } = require('./data');

const port = 5000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href='/api/products'>Products</a><br/>
        <a href='/api/people'>People</a>
    `)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })

    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    } else {
        return res.json(singleProduct);
    }
})

app.get('/app/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);

    res.send('hello world');
})

app.get('*', (req, res) => {
    res.status(404).send('ERROR PAGE')
})

app.listen(port, () => {
    console.log(`Server is listening on port 5000...`);
})