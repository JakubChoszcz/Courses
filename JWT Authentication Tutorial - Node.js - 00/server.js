console.clear();
const express = require("express");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const app = express();

app.use(express.json());

const POSTS = [
    {
        username: "Jakub",
        title: "Jakub's post"
    },
    {
        username: "Konrad",
        title: "Konrad's post"
    }
]

const authenticateToken = (req, res, next) => {
    const authHeader =  req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        } else {
            req.user = user;

            next();
        }
    })
}

app.get('/posts', authenticateToken, (req, res) => {
    res.send(POSTS.filter(post => post.username === req.user.name));
})

app.listen(3000, () => {
    console.log('Server is listening on 3000');
})