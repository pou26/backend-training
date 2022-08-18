const { count } = require("console")
const authorModel = require("../models/authorModel.js");
const bookModel = require("../models/bookModel.js");

const createBook=async function(req,res){
  let data=req.body

  let savedData=await bookModel.create(data)
  res.send({msg:savedData})
}

const listBooks=async function (req,res){
  let findauthor=await authorModel.find({author_name:"Chetan Bhagat"});
  let findbook=await bookModel.find({author_id:{$eq:findauthor[0].author_id}});
  res.send({msg:findbook});
}

const updatebook=async function(req,res){
  let bookprice=await bookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100} },{new:true});
  let updateprice=bookprice.price;
  let authorupdate=await authorModel.find({author_id:{req:bookprice.author_id}}).select({author_name:1,_id:0});
  res.send({authorupdate,updateprice});
}

const bookprice=async function(req,res){
  let p=await bookModel.find({price:{$gte:50,$lte:100}});
  let a=p.map(ele=ele.author_id);
  let newp=await authorModel.find({author_id:a}).select({author_name:1,_id:0});
  res.send(newp);
}



module.exports.createBook=createBook
module.exports.listBooks=listBooks
module.exports.updatebook=updatebook
module.exports.bookprice=bookprice






