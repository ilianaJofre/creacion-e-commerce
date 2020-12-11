const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/:category/:id/details', productsController.getProduct); 

module.exports = router;