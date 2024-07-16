const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    //title of the task
    title: {
        type: String,
        trim: false,
    },
    //small title under the main title
    subtitle: {
        type: String,
        trim: false,
    },
    //description for the task
    description: {
        type: String,
        trim: false
    },
    //data of the beging of the task
    dateP: {
        type: String,
        trim: false
    },
    //data of the end of the task
    dateE: {
        type: String,
        trim: false
    }
});

module.exports =  mongoose.model('Tasks', Task);