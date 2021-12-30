const { SEED_AUTHENTICATION, TOKEN_EXPIRATION } = require('../constants');
const jwt = require('jsonwebtoken');

const generateJWT = (id, email, time = TOKEN_EXPIRATION) => {
    const payload = { email, id };
    return jwt.sign(payload, SEED_AUTHENTICATION, { expiresIn: time });
};

const verifyJWT = (temporalToken) => {
    return jwt.verify(temporalToken.toString(), SEED_AUTHENTICATION);
}

module.exports = {
    generateJWT,
    verifyJWT,
}