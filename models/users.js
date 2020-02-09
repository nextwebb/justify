const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    role: {type: String},
    createdDate : {type: Date, default:Date.now}

})


userSchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validatePassword = (password, userPassword) => {
    console.log(userPassword, password)
    return bcrypt.compareSync(password, userPassword);
};

module.exports = mongoose.model('users', userSchema)