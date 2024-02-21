const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const {registerUser, getUser, getUpdateUser, deleteUser, UserLogin, UserLogout, UserProfile, updateProfile, getterProfile} = require('../controllers/userController')
const { isAuthenticatedUser } = require('../middleware/auth');

router.post('/register', upload.single('avatar'), registerUser)
router.get('/alluser', getUser)
router.put('/profile/update', isAuthenticatedUser,upload.single("avatar"),getUpdateUser)
// router.route('/profile/:id').put ( isAuthenticatedUser,upload.single("avatar"),getUpdateUser).delete( deleteUser)
router.post('/login', UserLogin)
router.get('/logout', UserLogout)
router.get('/profile', isAuthenticatedUser, UserProfile)
router.get('/editProfile', isAuthenticatedUser, updateProfile)
module.exports = router;