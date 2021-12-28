const User = require('../models/Users')

const create_user = async (req, res) => {
    const { name, lastname, email, dni, password } = req.body;
    try{
        const newUser = new User({
            name,
            lastname,
            email,
            dni,
            password
        })
        const response = await newUser.save();
        return res.status(200).json(response);
    }
    catch(error){
        return res.status(500)
    }
};

module.exports = { create_user }