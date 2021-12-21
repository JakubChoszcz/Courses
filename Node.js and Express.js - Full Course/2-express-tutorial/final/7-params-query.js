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
    const { productID } = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    } else {
        return res.json(singleProduct);
    }
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);

    const { search, limit } = req.query;
    let sortedProducts = [ ...products ];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] })
    }

    res.status(200).json(sortedProducts);
})

app.get('*', (req, res) => {
    res.status(404).send('ERROR PAGE')
})

app.listen(port, () => {
    console.log(`Server is listening on port 5000...`);
})

// http://localhost:5000/api/v1/query?search=a&limit=2