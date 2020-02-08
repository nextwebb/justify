const multer = require('multer');
const path = require('path');
// const cloudinary = require('cloudinary');
// const cloudinaryStorage = require("multer-storage-cloudinary");



// const cloudStorage = cloudinaryStorage({
//     cloudinary: cloudinary,
//     folder: "Phashsupping",
//     allowedFormats: ["jpg", "png"],
// });


const diskStorage = multer.diskStorage({
  destination: './public/uploads',
  filename: function(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  }
})

const multerOpts = {
  storage: diskStorage,
  fileFilter: function(req, file, cb) {
    checkFiletype(file, cb)
  }
}

function checkFiletype(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname ){
    return cb(null, true); 
  } else {
    cb(new Error('Error Occured: I can only take in images'));
  }
}

const upload = multer(multerOpts);

module.exports = upload;