const User = require('../models/Users')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { SEED_AUTHENTICATION, TOKEN_EXPIRATION } = require('../constants')

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
            password
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
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: "Incorrect user or password"
                }
            })
        }

        /*if (bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            });
        }*/

        let token = jwt.sign({
            user,
        }, SEED_AUTHENTICATION, {
            expiresIn: TOKEN_EXPIRATION
        })

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