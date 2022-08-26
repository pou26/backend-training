const UserModel= require("../models/userModel")


const basicCode= async function(req, res, next) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    }
// 1 creating the user
const createUser= async function (req, res) {
    let data= req.body   
    let token= req.headers.isfreeappuser
    data.isFreeAppUser = token
    let allData= await UserModel.create(data)
    res.send({msg: allData})
}


const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
