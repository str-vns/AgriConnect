const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const { isAuthenticatedUser } = require('../middleware/auth');
const { registerFarmer, getFarmer, getUpdateFarmer, deleteFarmer, getSingleFarmer } = require('../controllers/farmerController');

router.post('/register', isAuthenticatedUser, upload.array('images', 10), registerFarmer);
router.get('/allfarmer', getFarmer)
router.route('/profile/:id').put( upload.single('avatar'), getUpdateFarmer).delete(deleteFarmer)
router.get('/farmers/:id', getSingleFarmer)

module.exports = router;