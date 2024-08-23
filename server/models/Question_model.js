// models/Question.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    title:{
        type: String,
    },
    content1: {
        type: String,
    },
    content2: {
        type: String,
    },
    user_id: {
        type: String, 
        required: true,
        ref: 'User'
    },
    images: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    }],
    tags: [{
        type: String,
    }]
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
