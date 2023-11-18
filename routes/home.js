const express = require('express');
const router = express.Router();
const tokenVerify = require('../middlewares/tokenVerify');
const homeCtrl = require('../controllers/home')

router.get('/dashboard', homeCtrl.getDashboard);
// router.get('/dashboard', tokenVerify, homeCtrl.getDashboard);

module.exports = router;
