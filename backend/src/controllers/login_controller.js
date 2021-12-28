const passport = require('passport')
const User = require('../models/users')

const login = async (req, res) => {
    const { name, lastname, email, dni, password } = req.body;
    try{
        const newUser = new User({
            name,
            lastname,
            email,
            dni,
            password
        })
        
        console.log("entro")
        const result = await User.find();
        console.log(result)
        return res.status(200).json(newUser);
    }
    catch(error){
        return res.status(500)
    }
};

module.exports = { login }