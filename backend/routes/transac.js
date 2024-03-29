const express = require('express');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');
const { newOrder, allOrders, updateOrderConfirmation, getOrderConfirmationFarmer, myOrders, getSingleOrder, upProcessOrder,productStocky, productSpecific, pdfreciept } = require('../controllers/transController');


router.post('/transaction', isAuthenticatedUser, newOrder )
router.get('/allTransactions',isAuthenticatedUser, authorizeRoles('farmer') ,allOrders);
router.put('/order/confirm/:id', isAuthenticatedUser, authorizeRoles('farmer'), updateOrderConfirmation)
router.get('/OrderProcess/:id',isAuthenticatedUser, getOrderConfirmationFarmer )
router.get('/orders/my', isAuthenticatedUser, myOrders);
router.get('/order/:id', isAuthenticatedUser, getSingleOrder);
router.put ('/OrderUpdate/:id', isAuthenticatedUser, authorizeRoles('farmer'), upProcessOrder)
router.get('/stocky', productStocky)
router.get('/specific', isAuthenticatedUser, productSpecific)
router.get('/order/:id/receipt', pdfreciept);
module.exports = router;