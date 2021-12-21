const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: [ true, 'No username provided' ]
    }
});

module.exports = mongoose.model('User', UserSchema);