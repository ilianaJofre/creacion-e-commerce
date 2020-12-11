const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

router.get('/register', usersController.getRegister); 

router.get('/login', usersController.getLogin); 
router.post('/login', usersController.postLogin); 

module.exports = router;