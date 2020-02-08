const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caseSchema = new Schema({
    name: { type: String},
    email: {type: String},
    
})