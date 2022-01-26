require('dotenv').config();
const { verify } = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

const isAuth = req => {
    const authorization = req.headers['authorization'];

    console.log(req.headers.authorization);

    if (!authorization) {
        throw new Error( "You need to login" );
        // return res.send({ message: "You need to login" });
        // return console.log('You need to login');
    }

    const token = authorization.split(' ')[1];

    const userId = verify(token, ACCESS_TOKEN_SECRET);
    
    return userId;
};

module.exports = {
    isAuth
};