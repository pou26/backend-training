const PublisherModel = require("../models/publisherModel")
const AuthorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")



 const createBook= async function (req, res) {
    let book = req.body
    // // console.log(author_id.length,publisher_id)
    let a=book.author_id
    let p=book.publisher_id
    // if (!a){
    //     res.send("this author field is required")
    // }
    // else if(!p){
    //     res.send("this publisher field is required")
    // }
    // const{author_id,publisher_id}=book;
    if(!a || !p) {
        res.send({msg:"This detail is required"})
    }
    let checkauthorId=await AuthorModel.findById(a)
    if(!checkauthorId){
        res.send({status:false,msg:"Author id is invalid"})
    }
    let checkpublisherId=await PublisherModel.findById(p)
    if(!checkpublisherId){
        res.send({status:false,msg:"Publisher id is invalid"})
    }
    
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id','publisher_id'])
    
    res.send({data: specificBook})

}

const updateBook= async function (req,res){ 
    const publisher=await PublisherModel.find({name:["HarperCollins","Penguin"]}).select({_id:1})
    let books=await bookModel.updateMany({publisher_id:publisher},{isHardCover:true},{upsert:true})
        let author = await AuthorModel.find({ratings:{$gt:3.5} }).select({_id:1})
        let book1=await bookModel.updateMany({author_id:author},{$inc:{price:10}})
        let book2=await bookModel.find()
        res.send({book2})
    }


// const updateBook=async function(req,res){
//     let publisher=await bookModel.find( {$in:[{publisher_id:"62ffa859bcd0d49fc393d6df"},{publisher_id:"62ffa8d9bcd0d49fc393d6e5"}]});
//     // let a=publisher.map(ele=ele.publisher_id);
//     let a=await publisher.updateMany({ratings:{$gt:3.5} }
//                 ,{isHardCover:true,$inc:{price:10}},{new:true,upsert:true})
//     res.send(a);
//   }
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBook = updateBook


