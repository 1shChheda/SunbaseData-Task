const express = require('express');
const router = express.Router();
const tokenVerify = require('../middlewares/tokenVerify');
const customerCtrl = require('../controllers/customer')

router.get('/', tokenVerify, customerCtrl.getCustomerList);

router.get('/create-customer', tokenVerify, customerCtrl.getCreateCustomer);

router.post('/create-customer', tokenVerify, customerCtrl.postCreateCustomer);

router.get('/delete-customer', tokenVerify, customerCtrl.getDeleteCustomer);

router.post('/delete-customer', tokenVerify, customerCtrl.postDeleteCustomer);

router.get('/update-customer', tokenVerify, customerCtrl.getUpdateCustomer);

router.post('/update-customer', tokenVerify, customerCtrl.postUpdateCustomer);


module.exports = router;
