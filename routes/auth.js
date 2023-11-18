const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/auth');

router.get('/login', authCtrl.getUserLogin);

router.post('/login', authCtrl.postUserLogin);

module.exports = router;