/// Steps to create a model in js (using mongoose)

/// Step 1 - Schema - details of end Model (Note - id,userId,title,content,date)
/// Step 2 - Create Model <model name> <schema> Note 

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Note",noteSchema);

