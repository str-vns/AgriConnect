const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const {registerUser, getUser, getUpdateUser, deleteUser} = require('../controllers/userController')
const { isAuthenticatedUser } = require('../middleware/auth');

router.post('/register', upload.single('avatar'), registerUser)
router.get('/alluser', getUser)
router.route('/profile/:id').put( getUpdateUser).delete( deleteUser)

module.exports = router;