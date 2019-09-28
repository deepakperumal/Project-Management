const mongoose = require('mongoose');

const  Registration = mongoose.Schema({
    username: String,
    email: String,
    company:String,
    password:String,
    access:String
}, {
    timestamps: true
});

module.exports = mongoose.model('user', Registration);  