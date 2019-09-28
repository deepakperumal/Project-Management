const mongoose = require('mongoose');

const  project = mongoose.Schema({
    name: String,
    location: String,
    progress:String,
    client:String,
    start_date:String,
    end_date:String,
    company:String
}, {
    timestamps: true
});

module.exports = mongoose.model('projects', project); 