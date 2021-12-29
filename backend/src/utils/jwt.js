const { SEED_AUTHENTICATION, TOKEN_EXPIRATION } = require('../constants');
const jwt = require('jsonwebtoken');

const generarJWT = (user, time = TOKEN_EXPIRATION) => {
    const { name, lastname, email } = user;
    const payload = { name, lastname, email };
    return jwt.sign(payload, SEED_AUTHENTICATION, { expiresIn: time });
};

const verifyJWT = (temporalToken) => {
    console.log("Llego")
    return jwt.verify(temporalToken.toString(), SEED_AUTHENTICATION);
}

module.exports = {
    generarJWT,
    verifyJWT,
}