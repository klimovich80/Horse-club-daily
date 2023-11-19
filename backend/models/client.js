const mongoose = require('mongoose');

const clientShema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30,
    },
    lastName: {
        type: String,
        required: false,
        minLength: 2,
        maxLength: 30,
    },
    age: {
        type: Number,
        required: false,
        minLength: 1,
        maxLength: 3,
    },
});

module.exports = mongoose.model('client', clientShema);
