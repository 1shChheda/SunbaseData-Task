const express = require('express');
const router = express.Router();
const tokenVerify = require('../middlewares/tokenVerify');
const customerCtrl = require('../controllers/customer')

router.get('/', tokenVerify, customerCtrl.getDashboard);


module.exports = router;
