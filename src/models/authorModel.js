const mongoose = require('mongoose');
const authorSchema=new mongoose.Schema({
    author_id:{type:Number, require:true},
    author_name: String,
    age:Number,
    address:mongoose.Schema.Types.Mixed
},{timestamps:true})
console.log(authorSchema)

module.exports=mongoose.model("author",authorSchema)