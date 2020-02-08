const Cases = require('../models/cases');
// const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const fs = require('fs')

exports.getcase = (req, res, next) => {
    res.render('', {});
}

exports.postCase = async (req, res, next) => {
    const caseDetails = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        caseContent: req.body.caseContent
    };
    if (req.files) {
        // console.log(req.files)
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
            res.json({
                name: result.name,
                email: result.email,
                phoneNumber: result.phoneNumber,
                caseContent: result.caseContent,
                images: result.images.map((image)=> {
                    return {
                        imageurl: image.url,
                        imageId: image.id
                    }
                })
            })
        }
    }).catch(err => {
        console.log('you data wasnt sent, please try again')
    })
    // res.render('', {})
}