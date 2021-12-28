const express = require('express');
const router = express.Router();
const registration = require('../controllers/registration_controller')
const { create_user } = registration;

router.get('/', create_user);

module.exports = router;