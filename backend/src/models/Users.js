const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
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
        unique:true
    },
    password:{
        type: String,
        require:true
    },    
})

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

UserSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.password)    
}

module.exports = mongoose.model('User', UserSchema);