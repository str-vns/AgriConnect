const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const {registerUser, getUser, getUpdateUser, deleteUser, UserLogin, UserLogout, UserProfile, updateProfile, getterProfile,updatePassword, resetPassword, forgotPassword,getUserDetails,removeUser, updateUser,allUsers} = require('../controllers/userController')
const { isAuthenticatedUser } = require('../middleware/auth');

router.post('/register', upload.single('avatar'), registerUser)
router.get('/alluser', getUser)
router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.put('/password/update', isAuthenticatedUser, updatePassword)
router.put('/profile/update', isAuthenticatedUser,upload.single("avatar"),getUpdateUser)
router.post('/login', UserLogin)
router.get('/logout', UserLogout)
router.get('/profile', isAuthenticatedUser, UserProfile)
router.get('/editProfile', isAuthenticatedUser, updateProfile)
router.get('/user/:id', getterProfile)
router.get('/admin/users',  allUsers)
router.route('/admin/user/:id').get(isAuthenticatedUser, getUserDetails ).delete(isAuthenticatedUser, removeUser).put(isAuthenticatedUser, updateUser)

module.exports = router;