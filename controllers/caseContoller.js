const Cases = require('../models/cases');
// const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const fs = require('fs')
const mailer = require('../config/mailer');


//get all cases fron the database
exports.getcase = async (req, res, next) => {
    await Cases.find({}).then((result) => {
        if (result) {
            console.log(result)
            res.status(200).json({
                result: result
            })
            // res.render('', {});

        }
    }).catch(err => {
        console.log(err)
        // res.render('', {});

    })
}

//get one case from the database
exports.oneCase = async (req, res, next) => {
    await Cases.findById({ _id: req.params.id })
        .then(result => {
            if(result) {
                res.status(201).json({
                    caseDetails : result
                })
            }
            // res.render('', {});

        })
        // .exec()
        .catch(err => {
            res.status(500).json({
                error: err
            })
            // res.render('', {});

        })

}

//post case the database
exports.postCase = async (req, res, next) => {
    const caseDetails = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        caseContent: req.body.caseContent
    };
    if (req.files) {
        console.log(req.files)
        console.log('loading', 'we have gotten the files please hold on a little while')
        // req.flash('loading', 'we have gotten the files please hold on a little while')
        try {
            const uploader = async (path) => await cloudinary.uploads(path, 'justify');
            const urls = [];
            const files = req.files;
            for (const file of files) {
                const { path } = file;
                const newPath = await uploader(path)
                urls.push(newPath)
                fs.unlinkSync(path)
            }
            // console.log(urls)
            console.log('we are saving your file')

            caseDetails.images = urls

        } catch (error) {
            console.log('images couldnt be uploaded')
            console.log(error)
        }
    }
    // console.log(caseDetails)
    Cases.create(caseDetails).then((result) => {
        if (result) {
            console.log(result)
            console.log('i am working ooooo')
           
            res.status(201).json({
                name: result.name,
                email: result.email,
                phoneNumber: result.phoneNumber,
                caseContent: result.caseContent,
                caseId: result._id,
                images: result.images.map((image) => {
                    return {
                        imageurl: image.url,
                        imageId: image.id
                    }
                })
            })
        }
    }).catch(err => {
        console.log("after render")
        console.log('you data wasnt sent, please try again')
    }); 
    // function(done) {}
    let maiLOptions = {
        to: 'phawazzzy@gmail.com',
        subject: 'new case',
        text: `${req.body.caseContent} click this link to view more https://localhost:3000/api/report/` 
    };
    mailSender(maiLOptions)
        .catch((err) => {
            return next(err)
        }).then(() => {
            req.flash('mailSent', 'Your mail has been sent')
        })
    
    
    res.render('/api/getcase')
}

exports.deleteCase = async (req, res, next) => {

}

//AUTH

exports.register = (req, res, next) => {
    res.write('i am a register page', {})
}

exports.login = (req, res, next) => {
    res.write('i am a login page', {})
}