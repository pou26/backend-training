// //array_missing_number
// const express = require('express');
// const router = express.Router();
// const abc=require('../logger/logger')
// const bcd=require('../util/helper')
// const def=require('../validator/formatter')
// router.get('/s1', function(req, res){
//     const arr = [1,2,3,5,6,7]
//     let n=arr[arr.length-1]
//     let sum= n*(n+1)/2;
//     let sum1= arr.reduce((a,b)=>a+b);

//     let missingNumber=sum-sum1

//     console.log("missing number: "+ missingNumber)
//     res.send("missing number is : "+ missingNumber )
// })
// module.exports = router;



const express = require('express');
const router = express.Router();
const abc=require('../logger/logger')
const bcd=require('../util/helper')
const def=require('../validator/formatter')
router.get("/s2", function (req, res) {
    let arr= [33, 34, 35, 37, 38]
        
    let sum=0
    let n=arr.length
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i]
    }
    let  missingNumber=((n+1)*(arr[0]+arr[n-1])/2)-sum

    console.log({data: missingNumber})
    res.send(  { data: missingNumber  }  );
});
module.exports = router;








// const express = require('express');
// const abc = require('../introduction/intro')
// const router = express.Router();
// //1
// router.get('/movies', function (req, res){
//     let movies = ['Dear Zindagi', 'Business Proposal', 'Anek']
//     res.send(movies)
// })


// //2,3
// router.get('/movies/:indexNumber',function(req, res){
//     let movies=['Dear Zindagi', 'Business Proposal', 'Anek']
//    let index = req.params.indexNumber;
//    if(index > movies.length){
//       res.send("no movie exist with this id ")
//    }else{
//    res.send(movies[index])
//    }
// })

// //4
// router.get('/films', function(req, res){
//     let moviesName=[{
//         "id":1,
//         "name":"Bahubali"
//     },
//     {
        
//         "id":2,
//         "name":"Bahubali2"
//     },
//     {
        
//         "id":3,
//         "name":"veer zara"
//     },
//     {
        
//         "id":4,
//         "name":"krish"
//     }]
//         res.send(moviesName)
  

    
// })



// //5


//    router.get('/films/:indexNumber',function(req,res){
//     let flag=0
//     const indexNumber=req.params.indexNumber
//     const films=[{'id':1,'name':'The Shining'},{'id':2,'name':'Incendies'},{'id':3,'name':'Rang de Basanti'},{'id':4,'name':'Finding Nemo'}]
    
//     for(let i=0;i<films.length;i++)
//     {
//         if(films[i].id==indexNumber){
//             flag=1
//             res.send(films[i])

//         }
       
        
//      }
//      if(flag==0)
//         res.send('No films exist in this Id')
       
// })
// module.exports = router;

