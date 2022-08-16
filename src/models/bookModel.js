const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    
    bookName: {
        type: String,
        unique:true,
        required: true
    },
    authorName:{
        type: String,
        required: true
    },
    tags: [String],
    
    isstockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021},
    totalPages : Number,
    }, 
{ timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array