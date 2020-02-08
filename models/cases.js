const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caseSchema = new Schema({
    name: { type: String},
    email: {type: String, unique: true, required: true, trim: true} ,
    phoneNumber: {type: String},
    caseContent: {type: String}

})

module.exports = mongoose.model('cases', caseSchema);