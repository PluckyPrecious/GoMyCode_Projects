const mongoose = require('mongoose')


//defining a user schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    middle_name: { type: String },
    age: Number,
    email: String,
    placeOfBirth: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


//Creating a user model ('model', schema, collection)
module.exports = mongoose.model('User', userSchema);  