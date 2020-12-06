const express = require('express');
const rutasMain = require('./routes/main.js');
const app = express();

app.listen(3000, ()=> console.log('Servidor funcionando'));

app.use(express.static('public'));

app.use('/', rutasMain);