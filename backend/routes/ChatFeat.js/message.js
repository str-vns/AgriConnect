const express = require('express');
const router  = express.Router()
const upload = require('../../utility/multer');
const { isAuthenticatedUser } = require('../../middleware/auth');
const { newMessage, getMessages } = require('../../controllers/messController');


// add messages
router.post("/message", newMessage)
//get messages
router.get("/message/:conversationId", getMessages)

module.exports = router