const express = require('express');
const router = express.Router();
const { get_user } = require('../controllers/users_controller')

router.get('/', get_user);

module.exports = router;