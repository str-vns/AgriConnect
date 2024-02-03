const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const { isAuthenticatedUser } = require('../middleware/auth');
const { newBank, getBank, updateBank, deleteBank } = require('../controllers/bankController');


router.post('/bankinfo', upload.single('images'), newBank)
router.get('/allbanks', getBank)
router.route('/bankinfo/:id').put(upload.single('images'), updateBank).delete(deleteBank)
module.exports = router;