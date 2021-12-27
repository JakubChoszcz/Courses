const jwt = require('jsonwebtoken');
const { BadRequest } = require('../errors');

const login = async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        throw new BadRequest('Please provide email and password');
    }

    const id = new Date().getDate();

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});

    res.status(200).json({
        msg: 'user created',
        token
    })

    res.send('Fake Login/Register/Signup');
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);

    res.status(200).json({ 
        msg: `Hello, ${req.user.username}`, 
        secret: `Here is your authorization data, your lucky number is ${luckyNumber}` 
    })
};

module.exports = {
    login,
    dashboard
};