const SEED_AUTHENTICATION = process.env.SEED_AUTHENTICATION || 'this-is-not-a-secret';
const TOKEN_EXPIRATION = '900';

module.exports = { SEED_AUTHENTICATION, TOKEN_EXPIRATION }