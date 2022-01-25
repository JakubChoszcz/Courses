console.clear();

const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

const USERS = [];

app.use(express.json());

app.get('/users', (req, res) => {
    res.send(USERS);
})

app.post('/users', async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // console.log(salt);
        console.log(hashedPassword);
    
        const user = { name: req.body.name, password: hashedPassword };
        USERS.push(user);
    
        res.status(201).send();
    } catch (error) {
        res.status(500).send();
    }
})

app.post('/users/login', async (req, res) => {
    const user = USERS.find(user => user.name === req.body.name);

    if (!user) {
        return res.status(400).send('Can not find user');
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch (error) {
        return res.status(400).send('Can not find user');
    }
})

app.listen(3000, () => {
    console.log('Server is listening on 3000');
})