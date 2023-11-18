const express = require('express');
const router = express.Router();
const tokenVerify = require('../middlewares/tokenVerify');
const customerCtrl = require('../controllers/customer')

router.get('/', tokenVerify, customerCtrl.getDashboard);

router.get('/create-customer', tokenVerify, customerCtrl.getCreateCustomer);

router.post('/create-customer', tokenVerify, customerCtrl.postCreateCustomer);

router.get('/customers-list', tokenVerify, customerCtrl.getCustomerList);


module.exports = router;
