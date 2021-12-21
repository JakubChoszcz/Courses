const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    console.log('user hit the rescource');
    res.status(200).end('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    res.status(200).send('<h1>About Page</h1>')
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found...')
})

app.listen(port, () => {
    console.log('server is listening on port 5000...');
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen