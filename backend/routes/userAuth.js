const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const {registerUser, getUser, getUpdateUser, deleteUser, UserLogin, UserLogout} = require('../controllers/userController')
const { isAuthenticatedUser } = require('../middleware/auth');

router.post('/register', upload.single('avatar'), registerUser)
router.get('/alluser', getUser)
router.route('/profile/:id').put( getUpdateUser).delete( deleteUser)
router.post('/login', isAuthenticatedUser, UserLogin)
router.get('/logout', UserLogout)

module.exports = router;