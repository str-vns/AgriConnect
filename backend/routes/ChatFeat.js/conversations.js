const express = require('express');
const router  = express.Router()
const upload = require('../../utility/multer');
const { isAuthenticatedUser } = require('../../middleware/auth');
const { newConversation, getConversation } = require('../../controllers/convController');


// new conv
router.post("/conversation", newConversation );
//get conv of a user
router.get("/conversation/:userId", getConversation)

module.exports = router