const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    
    year: {
        type: Number,
        required: true,
    },

    author : {
        type: String,
        required: true,
    },

    edition: {
        type: Number,
        default: 1,
    }

}, { timestamps: true });

const BookModel = mongoose.model('Book', BookSchema);
module.exports = BookModel;

