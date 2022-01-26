console.clear();
require('dotenv').config();
const { PORT, REFRESH_TOKEN_SECRET } = process.env;
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { verify } = require('jsonwebtoken');
const { hash, compare } = require('bcrypt');
const { fakeDB } = require('./fakeDB');

const {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken
} = require('./tokens');

const {
    isAuth
} = require('./isAuth');

const app = express();

// Server middlewares
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server endpoints
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = fakeDB.find(user => user.email === email);

        if (user) {
            return res.send({ message: "User already exist" });
        }

        const hashedPassword = await hash(password, 10);
        fakeDB.push({
            id: fakeDB.length,
            email,
            password: hashedPassword
        });

        res.status(201).send({ message: 'User created' });
    } catch (error) {
        res.send({ error: error.message });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = fakeDB.find(user => user.email === email);

        if (!user) {
            return res.send("User doesn't exist");
        }

        const valid = await compare(password, user.password);

        if (!valid) {
            return res.send("Password is not correct");
        }

        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        user.refreshToken = refreshToken;

        sendRefreshToken(res, refreshToken);
        sendAccessToken(req, res, accessToken);
    } catch (error) {
        res.send({ error: error.message });
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('refreshtoken', { path: '/refresh_token' });

    return res.send({ message: 'Logged out' })
});

app.post('/protected', async (req, res) => {
    try {
        const userId = isAuth(req);

        if (userId) {
            res.send({ message: 'This is protected message' })
        }
    } catch (error) {
        res.send({ error: error.message })
    }
})

app.post('/refresh_token', (req, res) => {
    const token = req.cookies.refreshtoken;

    if (!token) {
        return res.send({ message: "Access token doesn't exist1" });
    }

    let payload;

    try {
        payload = verify(token, REFRESH_TOKEN_SECRET);
        // console.log(payload);
    } catch (error) {
        res.send({ error: error.message });
    }

    const user = fakeDB.find(user => user.id === payload.userId);

    if (!user) {
        return res.send({ message: "Access token doesn't exist2" });
    }

    if (user.refreshToken !== token) {
        return res.send({ message: "Access token doesn't exist3" });
    }

    const accessToken = createAccessToken(user.id);
    const refreshToken = createRefreshToken(user.id);

    user.refreshToken = refreshToken;

    sendRefreshToken(res, refreshToken);
    sendAccessToken(req, res, accessToken);
});

// Server listener
app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
});