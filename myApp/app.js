const express = require('express');
const app = express();
const path = require('path');
const fs = require ('fs');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

module.exports = app;
