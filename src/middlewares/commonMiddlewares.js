

//first question validation checking in the middlewarefolder
const validation= function ( req, res, next) {
    let tokenHeader= req.headers.isfreeappuser
    console.log(tokenHeader)
    if(!tokenHeader){
      res.send("please enter isFreeAppUser Boolean field with any value")
    }else{
        next()
    }
}







const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.validation = validation
