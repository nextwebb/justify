const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    subject: { type: String, required: true},
    content: {type: String, required: true},
    keywords:{type: [String], required: true}
    
})

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("constitution", articleSchema);

// Export the Article model
module.exports = Article;