const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/Users')
const { SEED_AUTHENTICATION } = require('../constants')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const { generateJWT } = require('../utils')

passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, email, password, done) => {
    try {
        const user = await User.create(req.body)
        const token = generateJWT(user.id, email)
        return done(null, { ...user.toJSON(), token })
    } catch (e) {
        return done(e)
    }
}))

passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return done({ message: 'User not found' }, null)
        }

        const validate = await user.isValidPassword(password)

        if (!validate) {
            return done({ message: 'Wrong password' }, null)
        }

        const token = generateJWT(user.id, email)

        return done(null, { ...user.toJSON(), token, message: 'Login successfull' })
    } catch (e) {
        return done(e)
    }
}))

passport.use(new JWTStrategy({
    secretOrKey: SEED_AUTHENTICATION,
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('jwt')
}, async (token, done) => {
    try {
        return done(null, token.user)
    } catch (e) {
        done(error)
    }
}))