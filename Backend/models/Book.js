const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: {
            values: ['Drama', 'Comedy', 'Sport'],
            message: '{VALUE} is not supported'
        }
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isDelete: {
        type: Boolean,
    }
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema);