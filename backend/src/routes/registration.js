const express = require('express');
const router = express.Router();
const { create_user } = require('../controllers/users_controller')
const { withErrorHandling } = require('../utils') 
const passport = require('passport')

router.post('/', withErrorHandling(create_user));

module.exports = router;