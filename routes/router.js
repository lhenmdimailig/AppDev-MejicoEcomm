const express = require('express');

const router = express.Router();
const mejicoController = require("../Controller/mejicoController");

router.get('/', mejicoController.index);
router.get('/about', mejicoController.about);
router.get('/contact', mejicoController.contact);
router.get('/products', mejicoController.products);
module.exports = router;