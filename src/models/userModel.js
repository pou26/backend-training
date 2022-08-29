const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    mobile: String,
    emailId: { type: String },
    password: { type: String },
    gender: { type: String, enum: [ "male", "female", "other"]},
    isDeleted: { type: Boolean, default: false},
    age: { type: Number }
})

module.exports = mongoose.model('User', userSchema)
