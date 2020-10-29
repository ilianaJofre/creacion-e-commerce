const express = require('express');
const app = express();

app.use(express.static('public')); // todos los archivos de pucblic quedan disponibles para el HTML

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});