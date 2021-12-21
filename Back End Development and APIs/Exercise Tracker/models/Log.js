const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    username: String,
    user_id: String,
    log: Array
});

module.exports = mongoose.model('Log', LogSchema);