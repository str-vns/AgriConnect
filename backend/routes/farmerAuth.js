const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const { isAuthenticatedUser } = require('../middleware/auth');
const { registerFarmer, getFarmer, getUpdateFarmer, deleteFarmer } = require('../controllers/farmerController');

router.post('/register', upload.single('avatar'), registerFarmer)
router.get('/allfarmer', getFarmer)
router.route('/profile/:id').put( upload.single('avatar'), getUpdateFarmer).delete(deleteFarmer)

module.exports = router;