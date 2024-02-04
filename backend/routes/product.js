const express = require('express');
const router = express.Router();
const upload = require('../utility/multer')
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');
const { newProducts, updateProducts, getProduct, deleteProducts } = require('../controllers/productController');

router.post('/addproduct', upload.array('images', 10), newProducts )
router.get('/farmerproducts', getProduct)
router.route('/updatedprod/:id').put( upload.array('images', 10), updateProducts).delete(deleteProducts)
module.exports = router;