const passport = require('passport')
const User = require('../models/Users')

const get_user = async (req, res) => {
    const { email, password } = req.body;
    try{
        console.log("estoy")
        const result = await User.find()
        console.log(result)
        return res.status(200).json(result);
    }
    catch(error){
        return res.status(500)
    }
};

module.exports = { get_user }