const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://poushali26:0U8on2StHP5FNKo2@cluster0.jwwwcc8.mongodb.net/poushali26", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




app.use('/', route);

// app.use(
//     function(req, res, next){
//         const date = new Date
//         console.log("inside GLOBAL MW");
//         console.log((date.now()),req.ip,req.path)
//         next()
//     }
// );





// var address = require('address');
// var moment = require('moment')
// app.use(
//     function (req, res, next) {
//         console.log("inside GLOBAL MW");
//         const a = moment().format('MMMM Do YYYY, hh:mm:ss a');
//         const IP = address.ip()
//         const api = req.originalUrl
//         console.log(a + " , " + IP + " , " + api)
//         next();
//     }
// );


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
