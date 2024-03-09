const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const { registerSrp, getSrp, updateSrp, getSingleSrp } = require('../controllers/srpController');


router.post('/srp/register', isAuthenticatedUser, authorizeRoles('admin') , upload.array('images', 4), registerSrp)
router.get('/srp/show',  getSrp )
router.put('/srp/update/:id',isAuthenticatedUser, upload.array('images', 10), updateSrp)
router.get('/srp/show/:id',  getSingleSrp )
module.exports = router;