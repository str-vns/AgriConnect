const express = require('express');
const router = express.Router();
const upload = require('../utility/multer');
const { isAuthenticatedUser } = require('../middleware/auth');
const { newBank, getBank, updateBank, deleteBank, GetOneBank, restoreBank, getBankLoc } = require('../controllers/bankController');


router.post('/bankinfo', upload.array('images', 10), newBank)
router.get('/allbanks', getBank)
router.route('/bankinfo/:id').put(upload.array('images', 10), updateBank).delete(deleteBank).get(GetOneBank)
router.put('/restore/bank/:id',restoreBank)
router.get('/bank/location', getBankLoc)
module.exports = router;