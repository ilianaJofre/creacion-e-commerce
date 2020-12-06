const express = require('express');
const path = require('path');
const loginController = require('../controllers/loginController.js');
const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.resolve('views/index.html'));
});

router.get('/register', (req,res)=>{
    res.sendFile(path.resolve('views/register.html'));
}); 

router.get('/login',loginController.vista);


module.exports = router;