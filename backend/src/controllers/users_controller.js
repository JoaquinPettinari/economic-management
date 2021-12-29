const User = require('../models/Users')
const passport = require('passport')
const bcrypt = require('bcrypt');
const { generarJWT } = require('../utils');

const create_user = async (req, res) => {
    const { name, lastname, email, dni, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: "This email is already registered"
                }
            })
        }

        const newUser = new User({
            name,
            lastname,
            email,
            dni,
            password: bcrypt.hashSync(password, 10)
        })
        const response = await newUser.save();
        return res.json({
            ok: true,
            response,
        })
    }
    catch (error) {
        return res.status(500)
    }
};

const get_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: "Incorrect user or password"
                }
            })
        }

        let token = generarJWT(user)

        return res.json({
            ok: true,
            user,
            token
        })
    }
    catch (error) {
        return res.status(500)
    }
};

module.exports = { create_user, get_user }