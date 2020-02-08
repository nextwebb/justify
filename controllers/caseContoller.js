const Cases = require('../models/cases');
const multer = require('multer');
const cloudinary = require('cloudinary');

exports.getcase = (req, res, next) => {
  res.render('', {});   
}

exports.postCase = (req, res, next) => {
    const caseDetails = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        caseContent: req.body.caseContent
    }

    Cases.create(caseDetails).then((result) => {
        if (result) {
            console.log(result)
            res.json({
                name: result.name,
                email: result.email,
                phoneNumber: result.phoneNumber,
                caseContent: result.caseContent
            })
        }
    }).catch(err => {
        console.log('you data wasnt sent, please try again')
    })
    // res.render('', {})
}