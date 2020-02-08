const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caseSchema = new Schema({
    name: { type: String},
    email: {type: String},
    phoneNumber: {type: Number},
    caseContent: {type: String}

})

module.exports = mongoose.model('cases', caseSchema);