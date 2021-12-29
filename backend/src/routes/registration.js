const express = require('express');
const router = express.Router();
const { create_user } = require('../controllers/users_controller')

router.get('/', create_user);

module.exports = router;