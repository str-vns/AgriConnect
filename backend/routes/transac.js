const express = require('express');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');
const { newOrder } = require('../controllers/transController');


router.post('/transaction', isAuthenticatedUser, newOrder )
module.exports = router;