const User = require('../models/Users')
const passport = require('passport')
const bcrypt = require('bcrypt');
const { generateJWT } = require('../utils');
require('../passport/auth')

const create_user = (req, res, next) => {
    passport.authenticate('signup', (err, data) => {
        if (!err) {
            return res.status(201).json({
                ok: true,
                data,
            });
        }
        else {
            console.log(err)
            return res.status(400).json({ error: "This email is already registered" });
        }
    })(req, res, next);
};

const get_user = async (req, res, next) => {
    passport.authenticate('login', (err, data) => {
        if (err) {
          return res.status(401).json({ error: err });
        }
        return res.status(200).json(data);
      })(req, res, next);
};

module.exports = { create_user, get_user }