const mongoose = require('mongoose');

const ExcerciseSchema = new mongoose.Schema({
    username: String,
    description: { 
        type: String, 
        required: [ true, 'No description provided' ] 
    },
    duration: {
        type: Number,
        required: [ true, 'No duration provided' ]
    },
    date: Date,
    user_id: String
});

module.exports = mongoose.model('Excercise', ExcerciseSchema);