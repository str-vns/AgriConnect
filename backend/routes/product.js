const express = require('express');
const router = express.Router();
const upload = require('../utility/multer')
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');
const { newProducts, updateProducts, getProduct, deleteProducts, GetOneProduct, getFarmerProduct } = require('../controllers/productController');

router.post('/addproduct', isAuthenticatedUser, upload.array('images', 10), newProducts )
router.get('/products/:id', GetOneProduct)
router.get('/farmerproducts/:id',isAuthenticatedUser, getProduct)
router.route('/updatedprod/:id').put( upload.array('images', 10), updateProducts).delete(deleteProducts)
router.get('/farmerprod/:id', getFarmerProduct)
router.get('/product/:id', GetOneProduct)
module.exports = router;