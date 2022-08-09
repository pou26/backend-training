const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
//1
router.get('/movies', function (req, res){
    let movies = ['Dear Zindagi', 'Business Proposal', 'Anek']
    res.send(movies)
})


//2,3
router.get('/movies/:indexNumber',function(req, res){
    let movies=['Dear Zindagi', 'Business Proposal', 'Anek']
   let index = req.params.indexNumber;
   if(index > movies.length){
      res.send("no movie exist with this id ")
   }else{
   res.send(movies[index])
   }
})

//4
router.get('/films', function(req, res){
    let moviesName=[{
        "id":1,
        "name":"Bahubali"
    },
    {
        
        "id":2,
        "name":"Bahubali2"
    },
    {
        
        "id":3,
        "name":"veer zara"
    },
    {
        
        "id":4,
        "name":"krish"
    }]
        res.send(moviesName)
  

    
})



//5
// router.get('/films/:indexNumber',function(req, res){
//     let moviesName=[ {"id": 1,"name": "The Shining"}, 
//     {"id": 2,"name": "Incendies"}, 
//     {"id": 3,"name": "Rang de Basanti"},
//      {"id": 4,"name": "Finding Nemo"}]
//        let index = req.params.indexNumber;
//         if(index > moviesName.length){
//            res.send("no movie exist with this id ")
//         }else{
//         res.send(moviesName[index])
//         }
//    })
//    module.exports = router;

   router.get('/films/:indexNumber',function(req,res){
    let flag=0
    const indexNumber=req.params.indexNumber
    const films=[{'id':1,'name':'The Shining'},{'id':2,'name':'Incendies'},{'id':3,'name':'Rang de Basanti'},{'id':4,'name':'Finding Nemo'}]
    
    for(let i=0;i<films.length;i++)
    {
        if(films[i].id==indexNumber){
            flag=1
            res.send(films[i])

        }
       
        
     }
     if(flag==0)
        res.send('No films exist in this Id')
       
})
module.exports = router;