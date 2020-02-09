const Constitution = require('../models/Constitutions')
//console.log(db)
const error = [] 
exports.postConstitution = function(req, res){
    req.body = {
        subject: req.body.subject.trim().toLowerCase(),
        content:req.body.content.trim().toLowerCase(),
        keywords:req.body.keywords.trim().toLowerCase().split(',')
    }
     Constitution.create(req.body).then(function(dbArticle){
        console.log("success! created document")
        
    }).catch(function(err){
        console.log(err)
        error.push(err)
        console.log(error)
    })
   
}

exports.getAllConstitution = function(req, res){
    Constitution.find({}).then((articles)=>{
        console.log(articles)
    }).catch((err)=>{
        console.log(err)
        error.push(err)
        console.log(error)
    })
}

exports.getSingleConstitution = function(req, res){

}