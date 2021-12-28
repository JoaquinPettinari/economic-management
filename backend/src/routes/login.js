const express = require('express');
const router = express.Router();
const login = require('../controllers/login_controller')

const { get_user } = login;

router.get('/', get_user);

module.exports = router;