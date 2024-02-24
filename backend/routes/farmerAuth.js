const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const { isAuthenticatedUser } = require('../middleware/auth');
const { registerFarmer, getFarmer, getUpdateFarmer, deleteFarmer, getSingleFarmer, createReview, getFarmerFarm } = require('../controllers/farmerController');

router.post('/register', isAuthenticatedUser, upload.array('images', 10), registerFarmer);
router.get('/allfarmer', getFarmer)
router.route('/profile/:id').put( upload.single('avatar'), getUpdateFarmer).delete(deleteFarmer)
router.get('/farmers/:id', getSingleFarmer)
router.get('/farm/:id', getFarmerFarm)
router.put('/review', isAuthenticatedUser, upload.array('images', 10), createReview )

module.exports = router;