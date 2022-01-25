console.clear();
const express = require("express");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const app = express();

app.use(express.json());

let REFRESH_TOKENS = [];

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCES_TOKEN_SECRET, { expiresIn: '15s' });
}

app.post('/token', (req, res) => {
    const refreshToken = req.body.token;

    if (!refreshToken) {
        return res.sendStatus(401);
    } else if (!REFRESH_TOKENS.includes(refreshToken)) {
        return res.sendStatus(401);
    } else {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(401);
            } else {
                const accessToken = generateAccessToken({ name: user.name });

                res.json({ accessToken })
            }
        })
    }
})

app.delete('/logout', (req, res) => {
    REFRESH_TOKENS = REFRESH_TOKENS.filter(token => token !== req.body.token);

    res.sendStatus(204);
})

app.post('/login', (req, res) =>{
    // Authenticate User

    const { username }= req.body;
    const user = { name: username };

    const accesToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

    REFRESH_TOKENS.push(refreshToken)

    res.json({ accesToken, refreshToken });
})

app.listen(4000, () => {
    console.log('Server is listening on 4000');
})