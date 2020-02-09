const Constitution = require('../models/Constitutions')

const error = [] 

exports.home = function(req, res){
    Constitution.find({}).then((articles)=>{
        console.log(articles) //array of articles
       res.render("index", {constitutions: articles } )
     // res.json(articles)
     }).catch((err)=>{
         console.log(err)
         error.push(err)
         console.log(error)
     })
 }
   


 exports.hotline = function(req, res){
    res.render('hot')
 }

// exports.home = function(req, res){
//     res.render('index')
// }

// exports.home = function(req, res){
//     res.render('index')
// }

// exports.home = function(req, res){
//     res.render('index')
// }

// exports.home = function(req, res){
//     res.render('index')
// }