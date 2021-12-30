const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/Users')
const { SEED_AUTHENTICATION } = require('../constants')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, email, password, done) => {
    try {
        console.log("Entro en el passport")
        const user = await User.create(req.body)
        return done(null, user)
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
            return done(null, false, { message: 'User not found' })
        }

        const validate = await user.isValidPassword(password)

        if (!validate) {
            return done(null, false, { message: 'Wrong password' })
        }

        return done(null, user, { message: 'Login successfull' })
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