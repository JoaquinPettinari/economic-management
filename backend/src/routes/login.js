const express = require('express');
const router = express.Router();
const { get_user } = require('../controllers/users_controller')
const { withErrorHandling } = require('../utils') 

router.post('/', withErrorHandling(get_user));

module.exports = router;