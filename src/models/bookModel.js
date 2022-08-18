const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
        name:String,
        author_id1:Number,
        price:Number,
        ratings:Number,
    
},{ timestamps: true })

module.exports=mongoose.model("books2",bookSchema)