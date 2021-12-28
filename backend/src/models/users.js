const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
        unique:true
    },
    lastname:{
        type: String,
        require:true,        
    },
    email:{
        type: String,
        require:true,
        unique:true
    },
    dni:{
        type: Number,
        require: true,        
    },
    password:{
        type: String,
        require:true
    },    
})

module.exports = mongoose.model('User', UserSchema);