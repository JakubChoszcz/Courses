// require('dotenv').config();

// const { MONGO_URI, MONGO_DB, PORT } = process.env;

// console.clear();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const MongoStore = require("connect-mongo")(session);

const app = express();

const connection = mongoose.createConnection('mongodb://localhost:27017/tutorial_db', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const sessionStore = new MongoStore({
    mongooseConnection: connection,
    collection: 'sessions'
})

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.get('/', (req, res, next) => {
    if (req.session.viewCount) {
        req.session.viewCount = req.session.viewCount + 1;
    } else {
        req.session.viewCount = 1;
    }

    res.send(`<h1>You've visite this page ${req.session.viewCount} times.</h1>`)
})

app.listen(3000);