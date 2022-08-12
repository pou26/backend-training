const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

mongoose.connect("mongodb+srv://functionUp:cszjqDBOWDuVK5I9@cluster0.ge3cm6p.mongodb.net/sidd-1db?retryWrites=true&w=majority",{
    
})
.then(()=>console.log("mongoDB is connected"))
.catch(err =>console.log(err))

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
