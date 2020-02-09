const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caseSchema = new Schema({
    name: { type: String},
    email: {type: String, trim: true} ,
    phoneNumber: {type: String},
    caseContent: {type: String},
    images:  {type: Array},
    status: {type: String},
    createdDate : {type: Date, default:Date.now}

})

module.exports = mongoose.model('cases', caseSchema);