const express = require('express');

const router = express.Router();
const mejicoController = require("../Controller/mejicoController");

router.get('/', mejicoController.index);
router.get('/productListing', mejicoController.productListing);
router.get('/productDetails', mejicoController.productDetails);
router.get('/shoppingCart', mejicoController.shoppingCart);
router.get('/checkOut', mejicoController.checkOut);
router.get('/userAccount', mejicoController.userAccount);
router.get('/orderHistory', mejicoController.orderHistory);
router.get('/aboutUs', mejicoController.aboutUs);
router.get('/contactUs', mejicoController.contactUs);
router.get('/blog', mejicoController.blog);

module.exports = router;