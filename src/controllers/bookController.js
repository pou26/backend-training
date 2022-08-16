const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const bookList= async function (req, res) {
    let allBooks= await BookModel.find({bookName:1, authorName:1})
 res.send({msg: allBooks})
}
const getBooksInYear=async function(req,res){
    let booksInYear=await BookModel.find({year:2021})
    res.send({msg:booksInYear})
}

const getParticularBooks=async function(req,res){
    let particularBook= await BookModel.find({$or: [{bookName:/.forever./},{year:2020}]},{bookName:1, authorName:1,
    _id:0,year:1})
    res.send({msg: particularBook})
    }

    const getXINRBooks = async function(req, res) {
        let allbooks = await BookModel.find( {"prices.indianPrice" : {$in: [100,200,500]} }  )
        res.send({data: allbooks})
    }
const getRandomBooks=async function(req,res){
    let allBooks=await BookModel.find({$or:[{totalPages :{$gt:500} },{isstockAvailable:true}]})
    res.send({msg:allBooks})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks





// const bookModel= require("../models/bookModel")

// const createBooks= async function (req, res) {
//     let data= req.body
//     let savedData= await bookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await bookModel.find()
//     res.send({msg: allBooks})
// }

// module.exports.createBooks= createBooks
// module.exports.getBooksData= getBooksData


