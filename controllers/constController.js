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

       // res.render('/',  {success:"Succesfully Posted Case! we'll contact you shortly on the case Status"} )
        
    }).catch(function(err){

        console.log(err)
        error.push(err)
        console.log(error)
    })
   
}

exports.getAllConstitution = function(req, res){
    Constitution.find({}).then((articles)=>{
       console.log(articles) //array of articles
      res.render("const", {constitutions: articles } )
    // res.json(articles)
    }).catch((err)=>{
        console.log(err)
        error.push(err)
        console.log(error)
    })
}

exports.getSingleConstitution = function(req, res){
   
    req.body = {
        keywordConsti:req.body.keywordConsti.trim().toLowerCase()
    } 
   
     Constitution.find({ keywords:req.body.keywordConsti }, function(err, docs ){
         console.log(docs)
         if(err) console.log(err)
         // req.render("/", {searchedArticles: docs })
         // req.json("docs")
     })


}